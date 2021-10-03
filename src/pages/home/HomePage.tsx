import { Box, StyledOcticon } from '@primer/components';
import { RepoIcon, StackIcon } from '@primer/octicons-react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { List, ListItem } from '../../components/spells/list/List';

const HomePageLink = styled(Box)`
    display: block;
    color: inherit;
    text-decoration: inherit;
    font-size: 18px;

    &:active,
    &:hover {
        background-color: #eee;
    }
`;

export const HomePage = () => (
    <Box display="flex" flexDirection="column">
        <List>
            <ListItem>
                <HomePageLink as={Link} to="/spellbooks" p={4}>
                    <StyledOcticon icon={StackIcon} size={24} mr={3} />
                    Spellbooks
                </HomePageLink>
            </ListItem>
            <ListItem>
                <HomePageLink as={Link} to="/spells" p={4}>
                    <StyledOcticon icon={RepoIcon} size={24} mr={3} />
                    Spells reference
                </HomePageLink>
            </ListItem>
        </List>
    </Box>
);
