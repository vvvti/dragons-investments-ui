import React from 'react';
import {LoginButton, Logo, StyledNavbar} from './Navbar.styled';

export const Navbar = () => {
    return (
        <StyledNavbar>
            <Logo>Dragons Investments</Logo>
            <LoginButton>Login</LoginButton>
        </StyledNavbar>
    );
};
