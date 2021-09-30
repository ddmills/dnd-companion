import { Box, Heading, StyledOcticon, themeGet } from '@primer/components';
import { SearchIcon } from '@primer/octicons-react';
import styled from 'styled-components';
import { UnstyledButton } from '../components/buttons/UnstyledButton';

interface PageHeaderProps {
    children?: React.ReactNode;
}

export const PageHeader = ({ children }: PageHeaderProps) => (
    <Box bg="canvas.inset" boxShadow="shadow.small" display="flex" justifyContent="space-between">
        {children}
    </Box>
);

interface PageHeaderTitleProps {
    icon?: React.ElementType;
    title: string;
}

PageHeader.Title = ({ icon, title } : PageHeaderTitleProps) => (
    <Heading fontSize={3} fontWeight={600} p={4}>
        {icon && <StyledOcticon icon={icon} size={24} mr={1} />}
        <span>{title}</span>
    </Heading>
);

interface PageHeaderActionProp {
    icon?: React.ElementType;
    label: string;
    onClick: () => void;
}

PageHeader.Action = ({ icon, label, onClick } : PageHeaderActionProp) => (
    <ActionButton onClick={onClick}>
        {icon && <StyledOcticon icon={SearchIcon} size={24} mr={1} aria-label={label}/>}
    </ActionButton>
);


const ActionButton = styled(UnstyledButton)`
    padding: 24px;
    &:active {
        background-color: ${themeGet('colors.canvas.subtle')};
    }
`;
