import { Box, Heading, StyledOcticon, themeGet } from '@primer/components';
import styled from 'styled-components';
import { Screen } from './Screen';

interface DialogProps {
    children?: React.ReactNode;
    isOpen: boolean;
    onDismiss: () => void;
}

export const Dialog = ({ isOpen, onDismiss, children }: DialogProps) => (
    <>
        <Screen isOpen={isOpen} onDismiss={onDismiss} />
        <DialogContainer isOpen={isOpen}>
            <DialogContent isOpen={isOpen}>{children}</DialogContent>
        </DialogContainer>
    </>
);

interface DialogHeaderProps {
    icon?: React.ElementType;
    title: string;
}

Dialog.Header = ({ icon, title }: DialogHeaderProps) => (
    <Box bg="canvas.inset">
        <Heading fontSize={2} fontWeight={600} p={4}>
            {icon && <StyledOcticon icon={icon} size={18} mr={1} />}
            <span>{title}</span>
        </Heading>
    </Box>
);

const DialogContainer = styled.div<{ isOpen: boolean }>`
    pointer-events: none;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: flex-start;
`;

const DialogContent = styled.div<{ isOpen: boolean }>`
    pointer-events: all;
    background-color: ${themeGet('colors.canvas.default')};
    border-radius: 0.5rem;

    max-width: 320px;
    width: 90%;
    min-height: 120px;

    margin-top: 80px;

    transition: box-shadow 0.15s ease;

    box-shadow: ${({ isOpen }) =>
        isOpen ? 'rgb(12 15 21 / 73%) 5px 5px 16px 1px' : 'none'};
    display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
    overflow: hidden;
`;
