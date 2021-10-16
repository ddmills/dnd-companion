import {
    createContext,
    ReactNode,
    useCallback,
    useContext,
    useState,
} from 'react';
import { Spell } from '../models/Spell';
import { useSpellFavorites } from './SpellFavoritesContext';

interface SpellSearchState {
    textFilter: string;
    classFilter: Set<string>;
    levelFilter: Set<number>;
    favoritesFilter: boolean;

    addClass: (playerClass: string) => void;
    removeClass: (playerClass: string) => void;

    addLevel: (level: number) => void;
    removeLevel: (level: number) => void;

    setTextFilter: (text: string) => void;

    hasClassFilter: () => boolean;
    hasLevelFilter: () => boolean;
    hasTextFilter: () => boolean;
    hasFilter: () => boolean;

    apply: (spells?: Spell[]) => Spell[];

    setClassFilter: (playerClasses: string[]) => void;

    toggleFavoritesFilter: () => void;

    clear: () => void;
}

const SpellSearchContext = createContext<SpellSearchState | undefined>(
    undefined
);

interface SpellSearchProviderProps {
    children?: ReactNode;
}

export const SpellSearchProvider = ({ children }: SpellSearchProviderProps) => {
    const [textFilter, setTextFilter] = useState('');
    const [classFilter, setClassFilterState] = useState(new Set<string>());
    const [levelFilter, setLevelFilter] = useState(new Set<number>());
    const [favoritesFilter, setFavoritesFilter] = useState(false);
    const { favorites } = useSpellFavorites();

    const clear = useCallback(() => {
        setTextFilter('');
        setClassFilterState(new Set());
        setLevelFilter(new Set());
        setFavoritesFilter(false);
    }, []);

    const addClass = (playerClass: string) => {
        const newClassFilter = new Set(classFilter);
        newClassFilter.add(playerClass);
        setClassFilterState(newClassFilter);
    };

    const toggleFavoritesFilter = useCallback(() => {
        setFavoritesFilter(!favoritesFilter);
    }, [favoritesFilter, setFavoritesFilter]);

    const setClassFilter = useCallback((playerClasses: string[]) => {
        const newClassFilter = new Set(playerClasses);
        setClassFilterState(newClassFilter);
    }, []);

    const removeClass = useCallback(
        (playerClass: string) => {
            const newClassFilter = new Set(classFilter);
            newClassFilter.delete(playerClass);
            setClassFilterState(newClassFilter);
        },
        [classFilter]
    );

    const addLevel = useCallback(
        (level: number) => {
            const newLevelFilter = new Set(levelFilter);
            newLevelFilter.add(level);
            setLevelFilter(newLevelFilter);
        },
        [levelFilter]
    );

    const removeLevel = useCallback(
        (level: number) => {
            const newLevelFilter = new Set(levelFilter);
            newLevelFilter.delete(level);
            setLevelFilter(newLevelFilter);
        },
        [levelFilter]
    );

    const hasClassFilter = () => classFilter.size > 0;
    const hasLevelFilter = () => levelFilter.size > 0;
    const hasTextFilter = () => textFilter.length > 0;
    const hasFilter = () =>
        hasClassFilter() || hasLevelFilter() || hasTextFilter();

    const apply = (spells?: Spell[]): Spell[] => {
        const textFilterLower = textFilter.toLowerCase();

        return (
            spells?.filter((s: Spell) => {
                if (hasTextFilter()) {
                    if (!s.name.toLowerCase().includes(textFilterLower)) {
                        return false;
                    }
                }
                if (hasClassFilter()) {
                    if (
                        !s.classes.some((c) => classFilter.has(c.toLowerCase()))
                    ) {
                        return false;
                    }
                }
                if (hasLevelFilter()) {
                    if (!levelFilter.has(s.level)) {
                        return false;
                    }
                }
                if (favoritesFilter) {
                    if (!favorites.includes(s.slug)) {
                        return false;
                    }
                }
                return true;
            }) || []
        );
    };

    const state: SpellSearchState = {
        favoritesFilter,
        textFilter,
        classFilter,
        levelFilter,
        addClass,
        removeClass,
        addLevel,
        removeLevel,
        setTextFilter,
        hasClassFilter,
        hasLevelFilter,
        hasTextFilter,
        hasFilter,
        toggleFavoritesFilter,
        apply,
        setClassFilter,
        clear,
    };

    return (
        <SpellSearchContext.Provider value={state}>
            {children}
        </SpellSearchContext.Provider>
    );
};

export const useSpellSearch = () => {
    const context = useContext(SpellSearchContext);

    if (context === undefined) {
        throw new Error(
            'useSpellSearch must be used within a SpellSearchProvider'
        );
    }

    return context;
};
