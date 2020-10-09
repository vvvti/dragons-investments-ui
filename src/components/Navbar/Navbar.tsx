import React from 'react';
import dragonImage from '../../assets/dragon-eye.png';
import {Logo, StyledNavbar, StyledTitle} from './Navbar.styled';
import NavigationItems from './NavigationItems';

export const Navbar = () => {
    return (
        <StyledNavbar>
            <StyledTitle>Dragons Investments</StyledTitle>
            <NavigationItems />
            <Logo src={dragonImage} alt="Logo" />
        </StyledNavbar>
    );
};
export default Navbar;
