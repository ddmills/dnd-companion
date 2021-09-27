import { Box, Heading, StyledOcticon } from '@primer/components';
import styled from 'styled-components';

const SubHeader = styled.div`
    background-color: powderblue;
`;

interface PageHeaderProps {
    icon?: React.ElementType,
    title?: string
};

export const PageHeader = ({ title, icon }: PageHeaderProps) => (
    <SubHeader>
        <Box>
            <Heading fontSize={3} fontWeight={600} p={4}>
                {icon && <StyledOcticon icon={icon} size={24} mr={1}/>}
                <span>{title}</span>
            </Heading>
        </Box>
    </SubHeader>
);
