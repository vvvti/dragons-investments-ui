import React from 'react';
import {StyledFormComponent} from './App.styles';
import {Navbar} from './components/Navbar/Navbar';
import {GlobalStyle} from './styles/GlobalStyles';

export const App = () => {
    return (
        <>
            <GlobalStyle />
            <Navbar />
            <StyledFormComponent />
        </>
    );
};
