import styled from 'styled-components';

export const StyledNavbar = styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-around;
    height: 10vh;
    background-color: hsl(230, 7%, 16%);
    color: hsl(0, 0%, 100%);
`;

export const StyledTitle = styled.div`
    text-transform: uppercase;
    margin: 0 30px;
    font-size: 50px;
    font-weight: 900;
    color: hsl(168, 100%, 44%);
`;

export const LoginButton = styled.button`
    text-transform: uppercase;
    background-color: hsl(0, 0%, 100%);
    color: hsl(0, 0%, 0%);
    border: none;
    margin: 0 30px;
`;

export const Logo = styled.img`
    margin: 0 30px;
    max-height: 90%;
`;
