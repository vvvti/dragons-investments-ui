import React from 'react';
import dragonImage from '../../assets/dragon-eye.png';
import {Logo, StyledNavbar, StyledTitleLink} from './Navbar.styled';
import NavbarItems from './NavbarItems/NavbarItems';

export const Navbar = () => {
    return (
        <StyledNavbar>
            <StyledTitleLink exact to="/">
                Dragons Investments
            </StyledTitleLink>
            <NavbarItems />
            <Logo src={dragonImage} alt="Logo" />
        </StyledNavbar>
    );
};
export default Navbar;
