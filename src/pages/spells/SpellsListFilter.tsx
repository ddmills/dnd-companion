import {
    Box,
    Heading,
    StyledOcticon,
    Text,
    TextInput,
    themeGet,
} from '@primer/components';
import { SearchIcon, XIcon } from '@primer/octicons-react';
import { useCallback } from 'react';
import styled from 'styled-components';
import { UnstyledButton } from '../../components/buttons/UnstyledButton';
import { useSpellSearch } from '../../contexts/SpellSearchContext';
import {
    levelFriendly,
    capitalizeFirstLetter,
} from '../../util/LevelStringFriendly';
import { playerClasses } from '../../data/PlayerClasses';

const TitleBar = styled(Heading)`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #171c23;
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
    height: 240px;
    grid-row-gap: 8px;
    margin-bottom: 16px;
`;

const SpellLevelGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-column-gap: 8px;
    height: 180px;
    grid-row-gap: 8px;
`;

interface ClassCellProps {
    isSelected: boolean;
}

const ClassCell = styled.button<ClassCellProps>`
    display: inline-block;
    text-decoration: none;
    color: inherit;
    background: none;
    padding: 0;
    font: inherit;
    outline: inherit;

    background-color: ${themeGet('colors.canvas.subtle')};
    border: 3px solid transparent;
    border-color: ${({ isSelected }) =>
        isSelected ? themeGet('colors.accent.emphasis') : 'transparent'};
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 0.25rem;
`;

const SpellLevelCell = styled.button<ClassCellProps>`
    display: inline-block;
    text-decoration: none;
    color: inherit;
    background: none;
    padding: 0;
    font: inherit;
    outline: inherit;

    background-color: ${themeGet('colors.canvas.subtle')};
    border: 3px solid transparent;

    border-color: ${({ isSelected }) =>
        isSelected ? themeGet('colors.accent.emphasis') : 'transparent'};
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 0.25rem;
`;

const spellLevels = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

interface SpellsListFilterProps {
    onDismiss: () => void;
}

export const SpellsListFilter = ({ onDismiss }: SpellsListFilterProps) => {
    const {
        classFilter,
        addClass,
        removeClass,
        levelFilter,
        addLevel,
        removeLevel,
        textFilter,
        setTextFilter,
    } = useSpellSearch();

    const isClassSelected = useCallback(
        (className: string) => classFilter.has(className),
        [classFilter]
    );
    const isLevelSelected = useCallback(
        (level: number) => levelFilter.has(level),
        [levelFilter]
    );

    const handleTextFilterChange = useCallback(
        (e: any) => {
            setTextFilter(e.target.value);
        },
        [setTextFilter]
    );

    const toggleClass = (className: string) => () => {
        if (isClassSelected(className)) {
            removeClass(className);
        } else {
            addClass(className);
        }
    };

    const toggleLevel = (level: number) => () => {
        if (isLevelSelected(level)) {
            removeLevel(level);
        } else {
            addLevel(level);
        }
    };

    return (
        <Box overflow="auto" height="100%">
            <TitleBar p={2} as="h3" fontSize={2}>
                <Text p={2}>
                    <StyledOcticon icon={SearchIcon} size={18} mr={1} />
                    Filter
                </Text>
                <CloseButton onClick={onDismiss}>
                    <StyledOcticon icon={XIcon} size={32} />
                </CloseButton>
            </TitleBar>
            <Box p={3}>
                <Box mb={3}>
                    <TextInput
                        icon={SearchIcon}
                        aria-label="Spell name"
                        name="spell-name"
                        placeholder="Search spells"
                        value={textFilter}
                        onChange={handleTextFilterChange}
                        width="100%"
                    />
                </Box>
                <Text pb={2} display="block" fontWeight="600">
                    Class
                </Text>
                <ClassGrid>
                    {playerClasses.map((playerClass) => (
                        <ClassCell
                            key={playerClass}
                            isSelected={isClassSelected(playerClass)}
                            onClick={toggleClass(playerClass)}
                        >
                            {capitalizeFirstLetter(playerClass)}
                        </ClassCell>
                    ))}
                </ClassGrid>
                <Text pb={2} display="block" fontWeight="600">
                    Spell level
                </Text>
                <SpellLevelGrid>
                    {spellLevels.map((spellLevel) => (
                        <SpellLevelCell
                            key={spellLevel}
                            isSelected={isLevelSelected(spellLevel)}
                            onClick={toggleLevel(spellLevel)}
                        >
                            {levelFriendly(spellLevel)}
                        </SpellLevelCell>
                    ))}
                </SpellLevelGrid>
            </Box>
        </Box>
    );
};
