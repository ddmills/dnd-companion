import { Box, Heading, StyledOcticon } from '@primer/components';

interface PageHeaderProps {
    icon?: React.ElementType;
    title?: string;
}

export const PageHeader = ({ title, icon }: PageHeaderProps) => (
    <Box bg="canvas.inset" boxShadow="shadow.small">
        <Heading fontSize={3} fontWeight={600} p={4}>
            {icon && <StyledOcticon icon={icon} size={24} mr={1} />}
            <span>{title}</span>
        </Heading>
    </Box>
);
