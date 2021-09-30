import { themeGet } from '@primer/components';
import styled from 'styled-components';

const DrawerContent = styled.div<{ isOpen: boolean }>`
    background-color: ${themeGet('colors.canvas.inset')};
    color: white;
    position: absolute;
    top: 0;
    bottom: 0;
    height: 100%;
    max-width: 320px;
    width: 90%;
    box-shadow: rgb(23 26 29) 0px 8px 24px;

    transition: right 0.15s ease;

    right: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
`;

const Screen = styled.div<{ isOpen: boolean }>`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    height: 100%;
    width: 100%;
    transition: background-color 0.5s ease;

    background-color: ${({ isOpen }) => (isOpen ? '#00000066' : '00000000')};
    pointer-events: ${({ isOpen }) => (isOpen ? 'all' : 'none')};
`;

interface DrawerProps {
    children?: React.ReactNode;
    isOpen: boolean;
    handleClose: () => void;
}

export const Drawer = ({ children, isOpen, handleClose }: DrawerProps) => (
    <>
        <Screen isOpen={isOpen} onClick={handleClose} />
        <DrawerContent isOpen={isOpen}>{children}</DrawerContent>
    </>
);
