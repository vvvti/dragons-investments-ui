import React from 'react';
import {GlobalStyle} from './styles/GlobalStyles';
import {Home} from './views/Home';

export const App = () => {
    return (
        <>
            <GlobalStyle />
            <Home />
        </>
    );
};
