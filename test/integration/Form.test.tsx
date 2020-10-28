import {render, screen, within} from '@testing-library/react';
import {FormComponent} from '../../src/components/Form/Home';
import React from 'react';
import userEvent from '@testing-library/user-event';
import axios from 'axios';
import {currencyForm} from '../../src/helpers/constants';

describe('<Form/>', () => {
    test('Should call api with data as initial form values', async () => {
        jest.spyOn(axios, 'get').mockResolvedValue({data: getCalculationMock()});

        render(<FormComponent />);

        userEvent.click(screen.getByRole('button', {name: 'Submit'}));

        const withinInvestmentsResults = within(screen.getByTestId('investments-results'));

        await withinInvestmentsResults.findByText('£1,025.54');

        // we are sure we can check that axios.get has been called after we found '£1,025.54' on the screen :)
        expect(axios.get).toHaveBeenCalledWith('/api/calculator', {
            params: {
                initialValue: 1000,
                monthlySaving: 300,
                savingPeriod: 6,
                annualProfit: 3,
                paymentFrequency: '1',
                currencyValue: currencyForm.BRITISH_POUND,
            },
        });

        withinInvestmentsResults.getByText('£25.21');
        withinInvestmentsResults.getByText('£1,000.33');
    });
});

const getCalculationMock = () => {
    return {
        finalValue: 1025.54,
        estimatedProfit: 25.21,
        depositValue: 1000.33,
        chartData: [],
    };
};
