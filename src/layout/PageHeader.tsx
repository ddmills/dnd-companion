import { Box, Heading, StyledOcticon } from '@primer/components';
import styled from 'styled-components';

const SubHeader = styled.div`
    background-color: #dedede;
`;

interface PageHeaderProps {
    icon?: React.ElementType,
    title?: string
};

export const PageHeader = ({ title, icon }: PageHeaderProps) => (
    <SubHeader>
        <Box>
            <Heading fontSize={3} p={3}>
                {icon && <StyledOcticon icon={icon} size={24} mr={1}/>}
                <span>{title}</span>
            </Heading>
        </Box>
    </SubHeader>
);
