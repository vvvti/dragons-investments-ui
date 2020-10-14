import * as yup from 'yup';

export const validationSchema = yup.object({
    initialValue: yup
        .number()
        .typeError('Value must be a number')
        .required('Field is required'),
    monthlySaving: yup
        .number()
        .typeError('Value must be a number')
        .required('Field is required'),
    savingPeriod: yup
        .number()
        .typeError('Value must be a number')
        .max(50, 'You can select max 50 years')
        .required('Field is required'),
    annualProfit: yup
        .number()
        .typeError('Value must be a number')
        .required('Field is required'),
});
