import React from 'react';
import {ROUTES} from '../../../helpers/routes';
import {StyledLink, StyledNavigationItems} from './NavbarItems.styled';

const NavigationItems: React.FC = () => {
    return (
        <StyledNavigationItems>
            <StyledLink exact to="/">
                Home
            </StyledLink>
            <StyledLink to={ROUTES.BASKET}>Basket</StyledLink>
            <StyledLink to={ROUTES.OFFER}>OFFER</StyledLink>
            <StyledLink to={ROUTES.ABOUT}>About</StyledLink>
            <StyledLink to={ROUTES.FAQ}>FAQ</StyledLink>
            <StyledLink to={ROUTES.CONTACT}>Contact</StyledLink>
        </StyledNavigationItems>
    );
};

export default NavigationItems;
