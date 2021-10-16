export const levelFriendly = (level: number): string => {
    if (level === 0) {
        return '0';
    }

    if (level === 1) {
        return '1st';
    }

    if (level === 2) {
        return '2nd';
    }

    if (level === 3) {
        return '3rd';
    }

    return `${level}th`;
};

const colorMap: { [key: string]: string } = {
    abjuration: '#f0d95e',
    conjuration: '#a7b945',
    divination: '#e7f4f3',
    enchantment: '#f2f09f',
    evocation: '#d14444',
    illusion: '#b55db5',
    necromancy: '#77c977',
    transmutation: '#52b8e0',
};

export const getSpellSchoolColor = (school?: string): string =>
    (school && colorMap[school?.toLowerCase()]) ?? 'inherit';

export const capitalizeFirstLetter = (str: string): string =>
    str.charAt(0).toUpperCase() + str.slice(1);

const classShortMap: { [key: string]: string } = {
    bard: 'brd',
    cleric: 'cle',
    druid: 'dru',
    paladin: 'pal',
    ranger: 'ran',
    sorcerer: 'sor',
    warlock: 'war',
    wizard: 'wiz',
};

export const getClassNameShort = (classname: string): string =>
    classShortMap[classname.toLowerCase()] ?? '?';
