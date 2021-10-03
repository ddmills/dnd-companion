import { themeGet } from '@primer/components';
import styled from 'styled-components';
import { Screen } from './Screen';

const DrawerContent = styled.div<{ isOpen: boolean }>`
    background-color: ${themeGet('colors.canvas.inset')};
    position: absolute;
    top: 0;
    bottom: 0;
    height: 100%;
    max-width: 320px;
    width: 90%;
    box-shadow: rgb(10 11 13) 0px 8px 24px

    transition: right 0.15s ease;

    right: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
`;

interface DrawerProps {
    children?: React.ReactNode;
    isOpen: boolean;
    onDismiss: () => void;
}

export const Drawer = ({ children, isOpen, onDismiss }: DrawerProps) => (
    <>
        <Screen isOpen={isOpen} onDismiss={onDismiss} />
        <DrawerContent isOpen={isOpen}>{children}</DrawerContent>
    </>
);
