import * as yup from 'yup';
import {FormValues} from '../../helpers/types';
import {FormikErrors} from 'formik';

export const formValidator = (values: FormValues) => {
    const errors: FormikErrors<FormValues> = {};

    if (!values.initialValue) {
        errors.initialValue = 'Initial value name is required';
    }

    if (values.initialValue < 0) {
        errors.initialValue = 'Initial value should be positive';
    }

    if (!values.monthlySaving) {
        errors.monthlySaving = 'Monthly saving is required';
    }

    if (values.monthlySaving < 0) {
        errors.monthlySaving = 'Monthly saving should be positive';
    }

    if (!values.savingPeriod) {
        errors.savingPeriod = 'Saving Period is required';
    }

    if (values.savingPeriod > 50) {
        errors.savingPeriod = 'You can select max 50 years';
    }

    return errors;
};

export const validationSchema = yup.object({
    initialValue: yup
        .number()
        .typeError('Value must be a number')
        .required('Field is required')
        .moreThan(-1, 'Amount must be 0 or higher')
        .integer('Amount must be an integer')
        .max(1000000, 'You can select max 1 000 000'),
    monthlySaving: yup
        .number()
        .typeError('Value must be a number')
        .required('Field is required')
        .moreThan(-1, 'Amount must be higher than 0')
        .integer('Amount must be an integer')
        .max(1000000, 'You can select max 1 000 000'),
    savingPeriod: yup
        .number()
        .typeError('Value must be a number')
        .max(50, 'You can select max 50 years')
        .required('Field is required')
        .positive('Must be higher than 0')
        .integer('Amount must be an integer'),
    annualProfit: yup
        .number()
        .typeError('Value must be a number')
        .required('Field is required')
        .moreThan(-1, 'Amount must be higher than 0')
        .max(500, 'You can select max 500%'),
});
