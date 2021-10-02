import { createContext, ReactNode, useContext, useState } from 'react';
import { Spell } from '../../Models/Spell';

interface SpellSearchState {
    textFilter: string;
    classFilter: Set<string>;
    levelFilter: Set<number>;

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
}

const SpellSearchContext = createContext<SpellSearchState | undefined>(
    undefined
);

interface SpellSearchContextProviderProps {
    children?: ReactNode;
}

export const SpellSearchProvider = ({
    children,
}: SpellSearchContextProviderProps) => {
    const [textFilter, setTextFilter] = useState('');
    const [classFilter, setClassFilter] = useState(new Set<string>());
    const [levelFilter, setLevelFilter] = useState(new Set<number>());

    const addClass = (playerClass: string) => {
        const newClassFilter = new Set(classFilter);
        newClassFilter.add(playerClass);
        setClassFilter(newClassFilter);
    };

    const removeClass = (playerClass: string) => {
        const newClassFilter = new Set(classFilter);
        newClassFilter.delete(playerClass);
        setClassFilter(newClassFilter);
    };

    const addLevel = (level: number) => {
        const newLevelFilter = new Set(levelFilter);
        newLevelFilter.add(level);
        setLevelFilter(newLevelFilter);
    };

    const removeLevel = (level: number) => {
        const newLevelFilter = new Set(levelFilter);
        newLevelFilter.delete(level);
        setLevelFilter(newLevelFilter);
    };

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

                return true;
            }) || []
        );
    };

    const state: SpellSearchState = {
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
        apply,
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
            'useSpellSearch must be used within a SpellSearchContextProvider'
        );
    }

    return context;
};
