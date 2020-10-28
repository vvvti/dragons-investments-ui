import * as Factory from 'factory.ts';
import {CurrencyBasket} from '../../src/helpers/constants';
import {BasketFormValues} from '../../src/helpers/types';

export const basketFactory = Factory.Sync.makeFactory<BasketFormValues>({
    basketValue: 1000,
    riskType: 3,
    currency: CurrencyBasket.BRITISH_POUND,
});
