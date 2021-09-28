import { Box } from '@primer/components';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { List, ListItem } from '../../components/spells/list/List';

const HomePageLink = styled(Box)`
    display: block;
    color: inherit;
    text-decoration: inherit;

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
                    Spellbooks
                </HomePageLink>
            </ListItem>
            <ListItem>
                <HomePageLink as={Link} to="/spells" p={4}>
                    Spells reference
                </HomePageLink>
            </ListItem>
        </List>
    </Box>
);
