import React from 'react';
import {Container} from './components/container/Container';
import {FormComponent} from './components/form/Form';

export const App = () => {
    return (
        <header>
            <Container title="Calculator">
                <FormComponent onSubmit={() => {}} />
            </Container>
        </header>
    );
};
