import {NavLink} from 'react-router-dom';
import styled from 'styled-components';
import {colors} from '../../../styles/theme';
const activeClassName = 'active';

export const StyledNavigationItems = styled.ul`
    display: flex;
    align-items: center;
    text-transform: uppercase;
    justify-content: space-around;
`;

export const StyledLink = styled(NavLink).attrs(() => ({
    activeClassName,
}))`
    text-decoration: none;
    color: ${colors.link};
    font-size: 24px;
    margin: 0 10px;

    &.${activeClassName} {
        color: #00e0b4;
    }
`;
