import React from 'react';
import {StyledLink, StyledNavigationItems} from './NavigationItems.styled';

const NavigationItems: React.FC = () => {
    return (
        <StyledNavigationItems>
            <StyledLink exact to="/">
                Home
            </StyledLink>
            <StyledLink to="/About">About</StyledLink>
            <StyledLink to="/Faq">FAQ</StyledLink>
            <StyledLink to="/Contact">Contact</StyledLink>
            <StyledLink to="/Cart">Cart</StyledLink>
        </StyledNavigationItems>
    );
};

export default NavigationItems;
