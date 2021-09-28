import { themeGet } from '@primer/components';
import styled from 'styled-components';

export const ListItem = styled.li`
    &:not(:last-child) {
        border-bottom: 1px solid ${themeGet('colors.border.muted')};
    }
`;

export const List = styled.ul`
    list-style: none;
    margin: 0;
    padding: 0;
`;
