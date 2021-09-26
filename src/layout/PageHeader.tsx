import { Box, Heading, StyledOcticon } from '@primer/components';
import styled from 'styled-components';

const SubHeader = styled.div`
    background-color: #dedede;
    border-bottom: 1px solid #ddd;
`;

interface PageHeaderProps {
    icon?: React.ElementType,
    title?: string
};

export const PageHeader = ({ title, icon }: PageHeaderProps) => (
    <SubHeader>
        <Box>
            <Heading fontSize={1} fontWeight={700} p={2} pl={3} pr={3}>
                {icon && <StyledOcticon icon={icon} size={16} mr={1}/>}
                <span>{title}</span>
            </Heading>
        </Box>
    </SubHeader>
);
