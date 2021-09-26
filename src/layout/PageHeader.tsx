import { Dropdown, Header, StyledOcticon } from '@primer/components';
import { RepoIcon } from '@primer/octicons-react';

export const PageHeader = () => (
    <Header>
        <Header.Item>
            <Header.Link href="#" fontSize={2}>
                <StyledOcticon icon={RepoIcon} size={32} mr={2} />
                <span>D&D Companion</span>
            </Header.Link>
        </Header.Item>
    </Header>
);
