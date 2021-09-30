import {
    Box,
    Heading,
    StyledOcticon,
    Text,
    themeGet,
} from '@primer/components';
import { XIcon } from '@primer/octicons-react';
import styled from 'styled-components';
import { UnstyledButton } from '../../components/buttons/UnstyledButton';

const TitleBar = styled(Heading)`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const CloseButton = styled(UnstyledButton)`
    padding: 8px;

    &:active {
        background-color: ${themeGet('colors.canvas.subtle')};
    }
`;


const ClassGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 8px;
    height: 320px;
    grid-row-gap: 8px;
    padding: 8px;
`;

const ClassCell = styled(UnstyledButton)`
    background-color: ${themeGet('colors.canvas.subtle')};
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

interface SpellsListFilterProps {
    handleClose: () => void;
}

export const SpellsListFilter = ({ handleClose }: SpellsListFilterProps) => {
    return (
        <Box p={2}>
            <TitleBar as="h3" fontSize={2}>
                <Text p={2}>Filter</Text>
                <CloseButton onClick={handleClose}>
                    <StyledOcticon icon={XIcon} size={32} />
                </CloseButton>
            </TitleBar>
            <ClassGrid>
                <ClassCell>Barbarian</ClassCell>
                <ClassCell>Bard</ClassCell>
                <ClassCell>Cleric</ClassCell>
                <ClassCell>Druid</ClassCell>
                <ClassCell>Fighter</ClassCell>
                <ClassCell>Monk</ClassCell>
                <ClassCell>Paladin</ClassCell>
                <ClassCell>Ranger</ClassCell>
                <ClassCell>Sorcerer</ClassCell>
                <ClassCell>Warlock</ClassCell>
                <ClassCell>Wizard</ClassCell>
            </ClassGrid>
        </Box>
    );
};
