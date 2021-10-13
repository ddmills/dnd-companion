import { Spell } from '../models/Spell';
import data from './spells.json';

const spells = new Map<string, Spell>();

data.forEach((datum) => {
    spells.set(datum.slug, datum);
});

export const getSpell = (slug: string): Spell | undefined => spells.get(slug);
export const getSpells = (): Spell[] => Array.from(spells.values());
