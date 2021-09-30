import { Box, themeGet, StyledOcticon } from '@primer/components';
import { ChevronLeftIcon, RepoIcon } from '@primer/octicons-react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { UnstyledButton } from '../components/buttons/UnstyledButton';
import styled from 'styled-components';

const LogoLink = styled(Link)`
    font-weight: bold;
    text-decoration: inherit;
    color: ${themeGet('colors.fg.subtle')};
`;

const BackBtn = styled(UnstyledButton)`
    position: absolute;
    left: 16px;
    top: 8px;
    color: ${themeGet('colors.fg.default')};
    display: inline-flex;
    align-items: center;
`;

export const AppHeader = () => {
    const history = useHistory();
    const location = useLocation();

    const showBtn = location.pathname !== '/';

    return (
        <Box
            bg="#171c23"
            pl={4}
            pr={4}
            pt={2}
            pb={2}
            justifyContent="center"
            display="flex"
            alignItems="center"
            fontWeight={500}
        >
            {showBtn && (
                <BackBtn onClick={() => history.goBack()}>
                    <StyledOcticon icon={ChevronLeftIcon} size={17} />
                    <span>Back</span>
                </BackBtn>
            )}
            <LogoLink to="/">
                <StyledOcticon icon={RepoIcon} size={16} mr={1} />
                <span>D&D Companion</span>
            </LogoLink>
        </Box>
    );
};
