export type Spell = {
    castingTime?: string;
    classes: string[];
    components: string[];
    concentration: boolean;
    desc: string[];
    duration?: string;
    level: number;
    higherLevelDesc?: string[];
    material?: string;
    name: string;
    ritual: boolean;
    school?: string;
    range?: string;
    uriSafeName: string;
};
