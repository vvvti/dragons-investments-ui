import React from 'react';
import {StyledLink, StyledNavigationItems} from './NavbarItems.styled';

const NavigationItems: React.FC = () => {
    return (
        <StyledNavigationItems>
            <StyledLink exact to="/">
                Home
            </StyledLink>
            <StyledLink to="/about">About</StyledLink>
            <StyledLink to="/faq">FAQ</StyledLink>
            <StyledLink to="/contact">Contact</StyledLink>
            <StyledLink to="/cart">Basket</StyledLink>
        </StyledNavigationItems>
    );
};

export default NavigationItems;
