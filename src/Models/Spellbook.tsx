import { Spell } from './Spell';

export type Spellbook = {
    spellbookId: string;
    name: string;
    classes: string[];
    spells: Spell[];
};
