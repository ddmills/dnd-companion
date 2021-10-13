import { Spellbook } from '../models/Spellbook';
import {
    createContext,
    ReactNode,
    useCallback,
    useContext,
    useEffect,
    useState,
} from 'react';
import * as repository from '../models/SpellbookRepository';
import { useParams } from 'react-router';

interface SpellbooksState {
    spellbooks: Spellbook[];

    saveSpellbook: (book: Spellbook) => void;
    deleteSpellbook: (book: Spellbook) => void;
    getSpellbookById: (spellbookId: string) => Spellbook | undefined;
}

const SpellbooksContext = createContext<SpellbooksState | undefined>(undefined);

interface SpellbooksProviderProps {
    children?: ReactNode;
}

export const SpellbooksProvider = ({ children }: SpellbooksProviderProps) => {
    const [spellbooks, setSpellbooks] = useState<Spellbook[]>([]);

    useEffect(() => {
        const books = repository.getSpellbooks();

        console.log('LOAD SPELLBOOKS');

        setSpellbooks(books);
    }, []);

    const saveSpellbook = useCallback(
        (spellbook: Spellbook) => {
            repository.saveSpellbook(spellbook);
            const idx = spellbooks.findIndex(
                (s) => s.spellbookId === spellbook.spellbookId
            );
            const clone = [...spellbooks];

            if (idx >= 0) {
                clone[idx] = spellbook;
            } else {
                clone.push(spellbook);
            }

            setSpellbooks(clone);
        },
        [setSpellbooks, spellbooks]
    );

    const deleteSpellbook = useCallback(
        (spellbook: Spellbook) => {
            repository.deleteSpellbook(spellbook);
            const idx = spellbooks.findIndex(
                (s) => s.spellbookId === spellbook.spellbookId
            );
            const clone = [...spellbooks];

            if (idx >= 0) {
                clone.splice(idx, 1);
            }

            setSpellbooks(clone);
        },
        [setSpellbooks, spellbooks]
    );

    const getSpellbookById = useCallback(
        (spellbookId: string) => {
            return spellbooks.find((s) => s.spellbookId === spellbookId);
        },
        [spellbooks]
    );

    const state = {
        spellbooks,
        saveSpellbook,
        deleteSpellbook,
        getSpellbookById,
    };

    return (
        <SpellbooksContext.Provider value={state}>
            {children}
        </SpellbooksContext.Provider>
    );
};

export const useSpellbooks = () => {
    const context = useContext(SpellbooksContext);

    if (context === undefined) {
        throw new Error(
            'useSpellbooks must be used within a SpellbooksContextProvider'
        );
    }

    return context;
};

interface SpellbookIdParam {
    spellbookId?: string;
}

export const useSpellbook = (): Spellbook | void => {
    const { spellbookId } = useParams<SpellbookIdParam>();
    const { getSpellbookById } = useSpellbooks();

    if (spellbookId) {
        const spellbook = getSpellbookById(spellbookId);

        return spellbook;
    }

    return undefined;
};
