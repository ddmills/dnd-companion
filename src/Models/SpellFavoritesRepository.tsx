const favoritesKey = 'favorite-spells';

export const getFavoriteSpellSlugs = (): string[] => {
    const rawData = localStorage.getItem(favoritesKey);
    return rawData ? JSON.parse(rawData) : [];
};

export const toggleFavoriteSpell = (slug: string): string[] => {
    const favorites = getFavoriteSpellSlugs();
    const idx = favorites.indexOf(slug);

    if (idx >= 0) {
        favorites.splice(idx, 1);
    } else {
        favorites.push(slug);
    }

    localStorage.setItem(favoritesKey, JSON.stringify(favorites));

    return favorites;
};
