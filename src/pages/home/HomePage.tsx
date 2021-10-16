import { Box, Button, StyledOcticon } from '@primer/components';
import { RepoIcon, StackIcon, TrashIcon } from '@primer/octicons-react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { List, ListItem } from '../../components/spells/list/List';
import { useNavigation } from '../../contexts/NavigationContext';
import { deleteAllSpellbooks } from '../../models/SpellbookRepository';

const HomePageLink = styled(Box)`
    display: block;
    color: inherit;
    width: 100%;
    text-decoration: inherit;
    text-align: left;
    font-size: 18px;
    font-weight: inherit;
    background-color: inherit;
    border: none;
    border-radius: 0;

    &:active,
    &:hover {
        background-color: #eee;
    }
`;

export const HomePage = () => {
    const { setSelectedSpell } = useNavigation();

    useEffect(() => {
        setSelectedSpell(undefined);
    }, [setSelectedSpell]);

    return (
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
                        Spell reference
                    </HomePageLink>
                </ListItem>
                <ListItem>
                    <HomePageLink
                        as={Button}
                        onClick={deleteAllSpellbooks}
                        p={4}
                    >
                        <StyledOcticon icon={TrashIcon} size={24} mr={3} />
                        Delete all spellbooks
                    </HomePageLink>
                </ListItem>
            </List>
        </Box>
    );
};
