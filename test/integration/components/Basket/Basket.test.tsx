import {screen, within} from '@testing-library/react';
import React from 'react';
import userEvent from '@testing-library/user-event';
import {axios} from '../../../../src/api/rest/axios';
import {BasketComponent} from '../../../../src/components/Basket/Basket';
import {renderWithRouter} from '../../../_helpers/renderWithRouters';

describe('<Basket/>', () => {
    test('Should call api with data as initial form values', async () => {
        jest.spyOn(axios, 'post').mockResolvedValue({data: getCalculationMock()});

        renderWithRouter(<BasketComponent />);

        userEvent.click(screen.getByRole('button', {name: /Calculation/i}));

        const withinBasketsResults = within(screen.getByTestId('basket-results'));

        await withinBasketsResults.findByText('£4,226.83');

        // we are sure we can check that axios.post has been called after we found '$4,226.83' on the screen :)
        expect(axios.post).toHaveBeenCalledWith('/basket', {
            id: '',
            basketValue: 1000,
            currency: 'GBP',
            riskType: 'MODERATE',
        });
        withinBasketsResults.getByText('£1,322.45');
        withinBasketsResults.getByText('£1,660.97');
        withinBasketsResults.getByText('£243.41');
    });

    test('sets id on /basket url after submit', async () => {
        jest.spyOn(axios, 'post').mockResolvedValue({data: getCalculationMock()});

        const {history} = renderWithRouter(<BasketComponent />);

        userEvent.click(screen.getByRole('button', {name: /calculation/i}));

        const withinBasketsResults = within(screen.getByTestId('basket-results'));

        await withinBasketsResults.findByText('£4,226.83');

        expect(history.entries).toHaveLength(2);
        expect(history.location.pathname).toEqual('/basket/3fa85f64-5717-4562-b3fc-2c963f66afa6');
    });
});

const getCalculationMock = () => {
    return {
        id: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
        riskType: 'MODERATE',
        currency: 'GBP',
        basketValue: 1000,
        totalAmount: 4226.83,
        profit: {
            cash: 243.41,
            bonds: 1660.97,
            stock: 1322.45,
        },
    };
};
