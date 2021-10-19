import { getSpell } from '../data/Spells';
import { Spell } from './Spell';
import { Spellbook } from './Spellbook';

const mapDataToSpellbook = (data: any): Spellbook => ({
    spellbookId: data.spellbookId,
    name: data.name,
    classes: data.classes,
    spells: data.spells?.map((slug: string) => getSpell(slug)) || [],
});

export const saveSpellbook = (book: Spellbook) => {
    const key = `book-${book.spellbookId}`;

    localStorage.setItem(
        key,
        JSON.stringify({
            spellbookId: book.spellbookId,
            name: book.name,
            classes: book.classes,
            spells: book.spells?.map((spell: Spell) => spell.slug) || [],
        })
    );
};

export const deleteSpellbook = (book: Spellbook) => {
    const key = `book-${book.spellbookId}`;

    localStorage.removeItem(key);
};

export const getSpellbooks = (): Spellbook[] => {
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
