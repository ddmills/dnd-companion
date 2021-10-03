import { Spell } from './Spell';
import { Spellbook } from './Spellbook';

const mapSpell = (spell: any): Spell => ({
    castingTime: spell.castingTime,
    classes: spell.classes,
    components: spell.components,
    concentration: spell.concentration,
    desc: spell.desc,
    duration: spell.duration,
    level: spell.level,
    higherLevelDesc: spell.higherLevelDesc,
    material: spell.material,
    name: spell.name,
    ritual: spell.ritual,
    school: spell.school,
    range: spell.range,
    uriSafeName: spell.uriSafeName,
});

const mapDataToSpellbook = (data: any): Spellbook => ({
    spellbookId: data.spellbookId,
    name: data.name,
    classes: data.classes || data.playerClasses || [],
    spells: data.spells?.map((spellData: any) => mapSpell(spellData)) || [],
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
