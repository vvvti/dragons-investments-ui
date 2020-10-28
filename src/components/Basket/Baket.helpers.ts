import * as yup from 'yup';
import {BasketFormValues} from '../../helpers/types';
import {FormikErrors} from 'formik';

export const basketFormValidator = (values: BasketFormValues) => {
    const errors: FormikErrors<BasketFormValues> = {};

    if (!values.basketValue) {
        errors.basketValue = 'Basket Value name is required';
    }

    if (!values.riskType) {
        errors.riskType = 'Risk Type is required';
    }

    if (!values.currency) {
        errors.currency = 'Currency is required';
    }
    return errors;
};

export const validationSchema = yup.object({
    basketValue: yup
        .number()
        .typeError('Value must be a number')
        .required('Field is required')
        .moreThan(-1, 'Amount must be 0 or higher')
        .integer('Amount must be an integer')
        .max(1000000, 'You can select max 1 000 000'),
});
