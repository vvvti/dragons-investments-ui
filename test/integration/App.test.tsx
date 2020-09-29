import {render, screen} from '@testing-library/react';
import React from 'react';
import {App} from '../../src/App';

describe('<App/>', () => {
    test('renders welcome dummy text', () => {
        render(<App />);

        expect(screen.getByRole('heading')).toHaveTextContent('Dragons Investments');
    });
});
