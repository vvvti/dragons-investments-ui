import {BasketFormValues} from '../../../src/helpers/types';
import {basketFormValidator} from '../../../src/components/Basket/Baket.helpers';

describe('BasketFormValues', () => {
    test('should not set any error if all fields are correct', () => {
        const entryValues: BasketFormValues = {
            basketValue: 1000,
            riskType: 3,
            currency: 'GBP',
        };

        expect(basketFormValidator(entryValues)).toEqual({});
    });

    // test('should set error for first name if first name is empty', () => {
    //     const entryEmployee = employeeFactory.build({firstName: ''});
    //
    //     const errors = newEmployeeFormValidator(entryEmployee);
    //     expect(errors.firstName).toBe('First name is required');
    // });
    //
    // test('should set error for last name if last name is empty', () => {
    //     const entryEmployee = employeeFactory.build({lastName: ''});
    //
    //     const errors = newEmployeeFormValidator(entryEmployee);
    //     expect(errors.lastName).toBe('Last name is required');
    // });
    //
    // test('should set error for job title if job title is empty', () => {
    //     const entryEmployee = employeeFactory.build({jobTitle: ''});
    //
    //     const errors = newEmployeeFormValidator(entryEmployee);
    //     expect(errors.jobTitle).toBe('Job title is required');
    // });
    //
    // test('should set error for email if entry email is not correct', () => {
    //     const entryEmployee = employeeFactory.build({email: 'wrong@email'});
    //
    //     const errors = newEmployeeFormValidator(entryEmployee);
    //     expect(errors.email).toBe('Invalid email');
    // });
    //
});
