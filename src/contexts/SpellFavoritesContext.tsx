import { createContext, ReactNode, useCallback, useContext, useEffect, useState } from 'react';
import { Spell } from '../models/Spell';
import { getFavoriteSpellSlugs, toggleFavoriteSpell } from '../models/SpellFavoritesRepository';

interface SpellFavoritesState {
    favorites: string[];
    toggleFavorite: (spell: Spell) => void;
    isFavorite: (spell: Spell) => boolean;
}

const SpellFavoritesContext = createContext<SpellFavoritesState | undefined>(undefined);

interface SpellFavoritesProviderProps {
    children?: ReactNode;
}

export const SpellFavoritesProvider = ({ children }: SpellFavoritesProviderProps) => {
    const [favorites, setFavorites] = useState<string[]>([]);

    useEffect(() => {
        const slugs = getFavoriteSpellSlugs();
        setFavorites(slugs);
    }, []);

    const isFavorite = useCallback((spell: Spell) => {
        return favorites.includes(spell.slug);
    }, [favorites]);

    const toggleFavorite = useCallback((spell: Spell) => {
        const slugs = toggleFavoriteSpell(spell.slug);

        setFavorites(slugs);
    }, []);

    const state = {
        isFavorite,
        toggleFavorite,
        favorites,
    };

    return (
        <SpellFavoritesContext.Provider value={state}>
            {children}
        </SpellFavoritesContext.Provider>
    );
};

export const useSpellFavorites = () => {
    const context = useContext(SpellFavoritesContext);

    if (context === undefined) {
        throw new Error(
            'useSpellFavorites must be used within a SpellFavoritesContextProvider'
        );
    }

    return context;
};
