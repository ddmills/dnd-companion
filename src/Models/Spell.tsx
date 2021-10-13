export type Spell = {
    name: string;
    slug: string;
    level: number;
    description: string[];
    classes: string[];
    components: string[];
    concentration: boolean;
    ritual: boolean;
    school: string;
    higherLevelDesc?: string[];
    duration?: string;
    material?: string;
    range?: string;
    castingTime?: string;
    attackType?: string;
};
