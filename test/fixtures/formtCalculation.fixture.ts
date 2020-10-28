import * as Factory from 'factory.ts';
import {CurrencyBasket} from '../../src/helpers/constants';
import {FormValues} from '../../src/helpers/types';

export const basketFactory = Factory.Sync.makeFactory<FormValues>({
    initialValue: 1000,
    monthlySaving: 300,
    savingPeriod: 6,
    annualProfit: 3,
    paymentFrequency: '1',
    currencyValue: CurrencyBasket.BRITISH_POUND,
});
