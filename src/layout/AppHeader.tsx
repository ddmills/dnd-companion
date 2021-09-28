import { Box, themeGet, StyledOcticon } from '@primer/components';
import { ChevronLeftIcon, RepoIcon } from '@primer/octicons-react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import styled from 'styled-components';

const LogoLink = styled(Link)`
    font-weight: bold;
    text-decoration: inherit;
    color: ${themeGet('colors.fg.subtle')};
`;

const BackBtn = styled.button`
    position: absolute;
    left: 16px;
    top: 8px;
    text-decoration: none;
    color: ${themeGet('colors.fg.default')};
    background: none;
    border: none;
    padding: 0;
    font: inherit;
    outline: inherit;
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
