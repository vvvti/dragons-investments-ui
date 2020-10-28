import React from 'react';
import {render, screen} from '@testing-library/react';
import {CopyButton} from '../../src/components/Basket/CopyButton/CopyButton';

// getByText
describe('Basic', () => {
    test('basic example with testing-library', () => {
        render(<CopyButton />);

        screen.getByText('Link to your basket');
    });
});
