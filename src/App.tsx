import React from 'react';
import {FormComponent} from './components/form/Form';
import {Navbar} from './components/navbar/Navbar';
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
