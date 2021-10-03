import { Spellbook } from './Spellbook';

const mapDataToSpellbook = (data: any): Spellbook => ({
    spellbookId: data.spellbookId,
    name: data.name,
    playerClasses: data.playerClasses,
});

export const saveSpellbookToLocalStorage = (book: Spellbook) => {
    const key = `book-${book.spellbookId}`;

    localStorage.setItem(key, JSON.stringify(book));
};

export const removeSpellbookFromLocalStorage = (book: Spellbook) => {
    const key = `book-${book.spellbookId}`;

    localStorage.removeItem(key);
};

export const getSpellbooksFromLocalStorage = (): Spellbook[] => {
    const books = [];

    for (let i = 0, len = localStorage.length; i < len; ++i) {
        const key = localStorage.key(i);

        if (key?.startsWith('book-')) {
            const rawData = localStorage.getItem(key);

            if (rawData) {
                const data = JSON.parse(rawData);
                const book = mapDataToSpellbook(data);

                books.push(book);
            }
        }
    }

    return books;
};
