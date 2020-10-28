import {fireEvent, render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import {axios} from '../../../../src/api/rest/axios';

describe('BasketForm', () => {
    test('should be possible to fill out the entire form', async () => {
        render(<Form />);
        jest.spyOn(axios, 'post');

        const basketValue = screen.getByRole('textbox');
        await userEvent.type(basketValue, '1000');

        const riskTypeSlider = screen.getByRole('slider');
        fireEvent.change(riskTypeSlider.querySelector('input')!, {target: {value: 2}});

        const submitButton = screen.getByRole('button', {name: 'Submit'});
        userEvent.click(submitButton);

        // await waitFor(() => expect(employeeApi.addNewEmployee).toHaveBeenCalled());
        // expect(employeeApi.addNewEmployee).toHaveBeenCalledWith({firstName: 'Filip'});
    }, 10000);
});
