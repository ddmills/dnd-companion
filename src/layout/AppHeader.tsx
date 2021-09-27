import { Header, StyledOcticon } from '@primer/components';
import { RepoIcon } from '@primer/octicons-react';
import { Link } from 'react-router-dom';

export const AppHeader = () => (
    <Header bg="#171c23">
        <Header.Item>
            <Header.Link as={Link} fontSize={2} to="/">
                <StyledOcticon icon={RepoIcon} size={32} mr={2} />
                <span>D&D Companion</span>
            </Header.Link>
        </Header.Item>
    </Header>
);
