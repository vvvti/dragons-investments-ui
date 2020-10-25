import React from 'react';
import {ROUTES} from '../../helpers/routes';
import {StyledContainer} from './NotFoundPage.styled';
import {StyledLink} from '../Navbar/NavbarItems/NavbarItems.styled';

export const NotFoundPage: React.FC = () => {
    return (
        <StyledContainer>
            Maybe this page moved? Got deleted? Is hiding out in quarantine? Never existed in the first place?
            <p>
                Let's go <StyledLink to={ROUTES.HOME}>HOME</StyledLink> and try from there.
            </p>
        </StyledContainer>
    );
};
