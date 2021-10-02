import { ApolloError } from '@apollo/client';
import {
    Spell as ApolloSpell,
    useGetSpellByNameQuery,
    useGetSpellsQuery,
} from '../generated/graphql';
import { Spell } from '../Models/Spell';

interface QueryResult<Type> {
    error?: ApolloError;
    isLoading: boolean;
    data?: Type;
}

const mapApolloSpell = (apolloSpell: Partial<ApolloSpell>): Spell => ({
    castingTime: apolloSpell.casting_time?.toString(),
    classes: apolloSpell.classes?.map((c) => c!.name!.toString()) ?? [],
    components: apolloSpell.components?.map((c) => c!.toString()) ?? [],
    concentration: apolloSpell.concentration ?? false,
    desc: apolloSpell.desc?.map((d) => d!.toString()) ?? [],
    duration: apolloSpell.duration?.toString(),
    level: apolloSpell.level!,
    higherLevelDesc: apolloSpell.higher_level?.map((d) => d!.toString()) ?? [],
    material: apolloSpell.material?.toString(),
    name: apolloSpell.name!,
    ritual: apolloSpell.ritual ?? false,
    school: apolloSpell.school?.name?.toString() ?? '',
    range: apolloSpell.range?.toString(),
    uriSafeName: encodeURIComponent(apolloSpell.name!),
});

export const useGetSpells = (): QueryResult<Spell[]> => {
    const { data, error, loading: isLoading } = useGetSpellsQuery();

    if (error || isLoading) {
        return {
            error,
            isLoading,
            data: [],
        };
    }

    return {
        error,
        isLoading,
        // @ts-ignore
        data: data!.spells.map((s) => mapApolloSpell(s)),
    };
};

export const useGetSpellByName = (name: string): QueryResult<Spell> => {
    const {
        data,
        error,
        loading: isLoading,
    } = useGetSpellByNameQuery({
        variables: {
            name,
        },
    });

    if (error || isLoading) {
        return {
            error,
            isLoading,
            data: undefined,
        };
    }

    return {
        error,
        isLoading,
        data: mapApolloSpell(data!.spell! as ApolloSpell),
    };
};
