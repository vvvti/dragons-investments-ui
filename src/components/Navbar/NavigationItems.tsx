import React from 'react';
import {Link} from 'react-router-dom';
import {StyledNavigationItems, StyledLink} from './NavigationItems.styled';

const NavigationItems: React.FC = () => {
    return (
        <StyledNavigationItems>
            <StyledLink>
                <Link to="/">Home</Link>
            </StyledLink>
            <StyledLink>
                <Link to="/About">About</Link>
            </StyledLink>
            <StyledLink>
                <Link to="/Faq">FAQ</Link>
            </StyledLink>
            <StyledLink>
                <Link to="/Contact">Contact</Link>
            </StyledLink>
            <StyledLink>
                <Link to="/Cart">Cart</Link>
            </StyledLink>
        </StyledNavigationItems>
    );
};

export default NavigationItems;
