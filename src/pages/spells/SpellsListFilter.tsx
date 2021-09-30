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
    height: 260px;
    grid-row-gap: 8px;
    margin-bottom: 16px;
`;

const SpellLevelGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-column-gap: 8px;
    height: 200px;
    grid-row-gap: 8px;
`;

const ClassCell = styled(UnstyledButton)`
    background-color: ${themeGet('colors.canvas.subtle')};
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 0.25rem;
`;

const SpellLevelCell = styled(UnstyledButton)`
    background-color: ${themeGet('colors.canvas.subtle')};
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 0.25rem;
`;

interface SpellsListFilterProps {
    handleClose: () => void;
}

export const SpellsListFilter = ({ handleClose }: SpellsListFilterProps) => {
    return (
        <Box overflow="auto" height="100%">
            <TitleBar p={2} as="h3" fontSize={2}>
                <Text p={2}>Filter</Text>
                <CloseButton onClick={handleClose}>
                    <StyledOcticon icon={XIcon} size={32} />
                </CloseButton>
            </TitleBar>
            <Box p={3}>
                <Text pb={2} display="block">
                    Class
                </Text>
                <ClassGrid>
                    <ClassCell>Bard</ClassCell>
                    <ClassCell>Cleric</ClassCell>
                    <ClassCell>Druid</ClassCell>
                    <ClassCell>Paladin</ClassCell>
                    <ClassCell>Ranger</ClassCell>
                    <ClassCell>Sorcerer</ClassCell>
                    <ClassCell>Warlock</ClassCell>
                    <ClassCell>Wizard</ClassCell>
                </ClassGrid>
                <Text pb={2} display="block">
                    Spell level
                </Text>
                <SpellLevelGrid>
                    <SpellLevelCell>0</SpellLevelCell>
                    <SpellLevelCell>1</SpellLevelCell>
                    <SpellLevelCell>2</SpellLevelCell>
                    <SpellLevelCell>3</SpellLevelCell>
                    <SpellLevelCell>4</SpellLevelCell>
                    <SpellLevelCell>5</SpellLevelCell>
                    <SpellLevelCell>6</SpellLevelCell>
                    <SpellLevelCell>7</SpellLevelCell>
                    <SpellLevelCell>8</SpellLevelCell>
                    <SpellLevelCell>9</SpellLevelCell>
                </SpellLevelGrid>
            </Box>
        </Box>
    );
};
