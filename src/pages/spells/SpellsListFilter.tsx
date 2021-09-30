import { Box, Heading, StyledOcticon, Text, themeGet } from '@primer/components';
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


interface SpellsListFilterProps {
    handleClose: () => void
};

export const SpellsListFilter = ({ handleClose } : SpellsListFilterProps) => {
    return (
        <Box p={2}>
            <TitleBar as="h3" fontSize={2}>
                <Text p={2}>Filter</Text>
                <CloseButton onClick={handleClose}>
                    <StyledOcticon icon={XIcon} size={32} />
                </CloseButton>
            </TitleBar>
        </Box>
    );
};
