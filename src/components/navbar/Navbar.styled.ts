import styled from 'styled-components';

export const StyledNavbar = styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 10vh;
    background-color: hsl(230, 7%, 16%);
    color: hsl(0, 0%, 100%);
`;

export const Logo = styled.div`
    text-transform: uppercase;
    margin: 0 30px;
`;

export const LoginButton = styled.button`
    text-transform: uppercase;
    background-color: hsl(0, 0%, 100%);
    color: hsl(0, 0%, 0%);
    border: none;
    margin: 0 30px;
`;
