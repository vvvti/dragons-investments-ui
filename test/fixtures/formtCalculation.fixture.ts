import * as Factory from 'factory.ts';
import {currencyBasket} from '../../src/helpers/constants';
import {FormValues} from '../../src/helpers/types';

export const basketFactory = Factory.Sync.makeFactory<FormValues>({
    initialValue: 1000,
    monthlySaving: 300,
    savingPeriod: 6,
    annualProfit: 3,
    paymentFrequency: '1',
    currencyValue: currencyBasket.BRITISH_POUND,
});
