import React from 'react';
import {Container} from '../components/container/Container';
import {FormComponent} from '../components/Form/Form';
import {Navbar} from '../components/navbar/Navbar';

export const Home = () => {
    return (
        <main>
            <Navbar />
            <Container>
                <FormComponent onSubmit={() => {}} />
            </Container>
        </main>
    );
};
