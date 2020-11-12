import React from 'react';
import dragonImage from '../../assets/dragon-eye.png';
import {Logo, StyledNavbar, StyledTitleLink} from './Navbar.styled';
import {NavbarItems} from './NavbarItems/NavbarItems';
import {LENDINGPAGE} from '../../helpers/constants';

export const Navbar = () => {
    return (
        <StyledNavbar>
            <StyledTitleLink href={LENDINGPAGE}>Dragons Investments</StyledTitleLink>
            <NavbarItems />
            <Logo src={dragonImage} alt="" />
        </StyledNavbar>
    );
};
export default Navbar;
