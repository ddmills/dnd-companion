import React from 'react';
import styled from 'styled-components';

export const ListItem = styled.li`
    border-bottom: 1px solid #ddd;

    &:first-child {
        border-top: 1px solid #ddd;
    }
`;

export const List = styled.ul`
    list-style: none;
    margin: 0;
    padding: 0;
`;
