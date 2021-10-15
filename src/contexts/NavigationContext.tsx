import {
    createContext,
    ReactNode,
    useContext,
    useState,
} from 'react';
import { Spell } from '../models/Spell';

interface NavigationState {
    selectedSpell?: Spell;
    setSelectedSpell: (spell: Spell | undefined) => void;
}

const NavigationContext = createContext<NavigationState | undefined>(undefined);

interface NavigationProviderProps {
    children?: ReactNode;
}

export const NavigationProvider = ({ children }: NavigationProviderProps) => {
    const [selectedSpell, setSelectedSpell] = useState<Spell>();

    const state = {
        selectedSpell,
        setSelectedSpell,
    };

    return (
        <NavigationContext.Provider value={state}>
            {children}
        </NavigationContext.Provider>
    );
};

export const useNavigation = () => {
    const context = useContext(NavigationContext);

    if (context === undefined) {
        throw new Error(
            'useNavigation must be used within a NavigationContextProvider'
        );
    }

    return context;
};
