import { createContext, ReactNode, useContext, useReducer, useState } from 'react';
import { Set } from 'typescript';

interface SpellSearchState {
    textFilter: string;
    classFilter: Set<string>;
    levelFilter: Set<number>;

    addClass: (playerClass: string) => void;
    removeClass: (playerClass: string) => void;

    addLevel: (level: number) => void;
    removeLevel: (level: number) => void;
};



const SpellSearchContext = createContext<SpellSearchState | undefined>(undefined);

interface SpellSearchContextProviderProps {
    children?: ReactNode;
}

export const SpellSearchProvider = ({ children }: SpellSearchContextProviderProps) => {
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

    const state : SpellSearchState = {
        textFilter,
        classFilter,
        levelFilter,
        addClass,
        removeClass,
        addLevel,
        removeLevel,
    };

    return (
        <SpellSearchContext.Provider value={state}>
            {children}
        </SpellSearchContext.Provider>
    )
};

export const useSpellSearch = () => {
    const context = useContext(SpellSearchContext);

    if (context === undefined) {
      throw new Error('useSpellSearch must be used within a SpellSearchContextProvider')
    }

    return context
  }
