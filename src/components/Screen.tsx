import { useCallback } from 'react';
import styled from 'styled-components';

const ScreenDiv = styled.div<{ isOpen: boolean }>`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    height: 100%;
    width: 100%;
    transition: background-color 0.5s ease;
    backdrop-filter: background-color 0.5s ease;

    background-color: ${({ isOpen }) => (isOpen ? '#00000066' : '00000000')};
    pointer-events: ${({ isOpen }) => (isOpen ? 'all' : 'none')};
    backdrop-filter: ${({ isOpen }) => (isOpen ? 'blur(1px)' : 'none')};
`;

interface ScreenProps {
    children?: React.ReactNode;
    isOpen: boolean;
    onDismiss: () => void;
}

export const Screen = ({ isOpen, onDismiss, children }: ScreenProps) => {
    const close = useCallback(
        (e) => {
            e.stopPropagation();
            e.preventDefault();
            onDismiss();
        },
        [onDismiss]
    );

    return (
        <ScreenDiv isOpen={isOpen} onClick={close}>
            {children}
        </ScreenDiv>
    );
};
