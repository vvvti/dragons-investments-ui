import React from 'react';
import {Container} from './components/container/Container';
import {FormComponent} from './components/form/Form';
import {Navbar} from './components/navbar/Navbar';
import {GlobalStyle} from './GlobalStyles';

export const App = () => {
    return (
        <>
            <GlobalStyle />
            <Navbar />
            <Container title="Calculator">
                <FormComponent onSubmit={() => {}} />
            </Container>
        </>
    );
};
