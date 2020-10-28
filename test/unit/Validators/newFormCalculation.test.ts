import {FormValues} from '../../../src/helpers/types';
import {formValidator} from '../../../src/components/Form/Form.helpers';
import {basketFactory} from '../../fixtures/formtCalculation.fixture';

describe('FormValues', () => {
    test('should not set any error if all fields are correct', () => {
        const entryValues: FormValues = {
            initialValue: 1000,
            monthlySaving: 300,
            savingPeriod: 6,
            annualProfit: 3,
            paymentFrequency: '1',
            currencyValue: 'GBP',
        };

        expect(formValidator(entryValues)).toEqual({});
    });

    test('should set error if initialValue is missing', () => {
        const entryValues = basketFactory.build({initialValue: 0});

        const errors = formValidator(entryValues);
        expect(errors.initialValue).toBe('Initial value name is required');
    });

    test('should set error if initialValue is negative', () => {
        const entryValues = basketFactory.build({initialValue: -5000});

        const errors = formValidator(entryValues);
        expect(errors.initialValue).toBe('Initial value should be positive');
    });
    test('should set error if monthlySaving is missing', () => {
        const entryValues = basketFactory.build({monthlySaving: 0});

        const errors = formValidator(entryValues);
        expect(errors.monthlySaving).toBe('Monthly saving is required');
    });

    test('should set error if monthlySaving is negative', () => {
        const entryValues = basketFactory.build({monthlySaving: -300});

        const errors = formValidator(entryValues);
        expect(errors.monthlySaving).toBe('Monthly saving should be positive');
    });
    test('should set error if savingPeriod is missing', () => {
        const entryValues = basketFactory.build({savingPeriod: 0});

        const errors = formValidator(entryValues);
        expect(errors.savingPeriod).toBe('Saving Period is required');
    });

    test('should set error if savingPeriod is negative', () => {
        const entryValues = basketFactory.build({savingPeriod: 60});

        const errors = formValidator(entryValues);
        expect(errors.savingPeriod).toBe('You can select max 50 years');
    });
});
