import React from 'react';
import {FormComponent} from './components/FormComponent/FormComponent';

export const App = () => {
    return (
        <header>
            <h3>Dragons Investments app!</h3>
            <FormComponent onSubmit={() => {}} />
        </header>
    );
};
