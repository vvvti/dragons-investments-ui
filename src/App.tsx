import React from 'react';
import {Container} from './components/container/Container';
import {FormComponent} from './components/form/Form';
import {Navbar} from './components/navbar/Navbar';

export const App = () => {
    return (
        <>
            <Navbar />
            <main>
                <Container title="Calculator">
                    <FormComponent onSubmit={() => {}} />
                </Container>
            </main>
        </>
    );
};
