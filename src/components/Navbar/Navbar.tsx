import React from 'react';
import dragonImage from '../../assets/dragon-eye.png';
import {Logo, StyledNavbar, StyledTitle} from './Navbar.styled';

export const Navbar = () => {
    return (
        <StyledNavbar>
            <StyledTitle>Dragons Investments</StyledTitle>
            <Logo src={dragonImage} alt="Logo" />
        </StyledNavbar>
    );
};
