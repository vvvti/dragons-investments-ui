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

    test('should set error if Initial value is missing', () => {
        const entryValues = basketFactory.build({initialValue: ''});

        const errors = formValidator(entryValues);
        expect(errors.initialValue).toBe('Initial value name is required');
    });

    test('should set error if Initial value is negative', () => {
        const entryValues = basketFactory.build({initialValue: -5000});

        const errors = formValidator(entryValues);
        expect(errors.initialValue).toBe('Initial value should be positive');
    });
    test('should set error if Monthly saving is missing', () => {
        const entryValues = basketFactory.build({monthlySaving: 0});

        const errors = formValidator(entryValues);
        expect(errors.monthlySaving).toBe('Monthly saving is required');
    });

    test('should set error if Monthly saving is negative', () => {
        const entryValues = basketFactory.build({monthlySaving: -300});

        const errors = formValidator(entryValues);
        expect(errors.monthlySaving).toBe('Monthly saving should be positive');
    });
    test('should set error if Saving Period is missing', () => {
        const entryValues = basketFactory.build({savingPeriod: 0});

        const errors = formValidator(entryValues);
        expect(errors.savingPeriod).toBe('Saving Period is required');
    });

    test('should set error if Saving Period is negative', () => {
        const entryValues = basketFactory.build({savingPeriod: 60});

        const errors = formValidator(entryValues);
        expect(errors.savingPeriod).toBe('You can select max 50 years');
    });
    test('should set error if Annual Profit is missing', () => {
        const entryValues = basketFactory.build({annualProfit: 0});

        const errors = formValidator(entryValues);
        expect(errors.annualProfit).toBe('Annual Profit is required');
    });

    test('should set error if Annual Profit is negative', () => {
        const entryValues = basketFactory.build({annualProfit: 600});

        const errors = formValidator(entryValues);
        expect(errors.annualProfit).toBe('You can select max 50 years');
    });
});
