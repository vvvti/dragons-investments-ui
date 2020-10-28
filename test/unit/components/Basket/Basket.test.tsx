import {fireEvent, render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {BasketComponent} from '../../../../src/components/Basket/Basket';
import React from 'react';

describe('BasketForm', () => {
    test('should be possible to fill out the entire form', async () => {
        render(<BasketComponent />);

        //        screen.getByRole('textbox')
        const basketValue = screen.getByLabelText(/Basket Value/);
        await userEvent.type(basketValue, '1000');

        const riskTypeSlider = screen.getByRole('slider');
        fireEvent.change(riskTypeSlider.querySelector('input')!, {target: {value: 2}});

        const submitButton = screen.getByRole('button', {name: 'Submit'});
        userEvent.click(submitButton);
    }, 10000);
});
