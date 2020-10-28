import {BasketFormValues} from '../../../src/helpers/types';
import {basketFormValidator} from '../../../src/components/Basket/Baket.helpers';
import {basketFactory} from '../../fixtures/basketCalculation.fixture';

describe('BasketFormValues', () => {
    test('should not set any error if all fields are correct', () => {
        const entryValues: BasketFormValues = {
            basketValue: 1000,
            riskType: 3,
            currency: 'GBP',
        };

        expect(basketFormValidator(entryValues)).toEqual({});
    });

    test('should set error if basketValue is 0', () => {
        const entryValues = basketFactory.build({basketValue: 0});

        const errors = basketFormValidator(entryValues);
        expect(errors.basketValue).toBe('Basket Value name is required');
    });

    test('should set error if riskType > 5', () => {
        const entryValues = basketFactory.build({riskType: 6});

        const errors = basketFormValidator(entryValues);
        expect(errors.riskType).toBe('Select another Risk Type');
    });

    test('should set error if selected currency is not included in currency basket', () => {
        const entryValues = basketFactory.build({currency: 'PLN'});

        const errors = basketFormValidator(entryValues);
        expect(errors.currency).toBe('Select another currency');
    });
});
