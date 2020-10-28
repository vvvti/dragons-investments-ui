import * as Factory from 'factory.ts';
import {currencyBasket} from '../../src/helpers/constants';
import {BasketFormValues} from '../../src/helpers/types';

export const employeeFactory = Factory.Sync.makeFactory<BasketFormValues>({
    basketValue: 1000,
    riskType: 3,
    currency: currencyBasket.BRITISH_POUND,
});
