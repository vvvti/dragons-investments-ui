import styled from 'styled-components';
import {colors} from '../../styles/theme';

export const StyledNavbar = styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-around;
    height: 10vh;
    background-color: ${colors.backgroundNavbar};
`;

export const StyledTitle = styled.div`
    text-transform: uppercase;
    font-size: 50px;
    font-weight: 900;
    color: ${colors.mainTitle};
`;

export const Logo = styled.img`
    max-height: 100%;
`;
