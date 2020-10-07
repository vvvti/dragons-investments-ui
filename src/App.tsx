import React from 'react';
import {FormComponent} from './components/Form/Form';
import {Navbar} from './components/Navbar/Navbar';
import {GlobalStyle} from './styles/GlobalStyles';

export const App = () => {
    return (
        <>
            <GlobalStyle />
            <Navbar />
            <FormComponent onSubmit={() => {}} />
        </>
    );
};
