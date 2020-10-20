import React from 'react';
import {StyledLink, StyledNavigationItems} from './NavbarItems.styled';
import {ROUTES} from '../../../helpers/routes';

const NavigationItems: React.FC = () => {
    return (
        <StyledNavigationItems>
            <StyledLink exact to="/">
                Home
            </StyledLink>
            <StyledLink to={ROUTES.ABOUT}>About</StyledLink>
            <StyledLink to={ROUTES.FAQ}>FAQ</StyledLink>
            <StyledLink to={ROUTES.CONTACT}>Contact</StyledLink>
            <StyledLink to={ROUTES.BASKET}>Basket</StyledLink>
        </StyledNavigationItems>
    );
};

export default NavigationItems;
