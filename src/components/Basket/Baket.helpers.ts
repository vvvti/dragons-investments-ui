import * as yup from 'yup';

export const validationSchema = yup.object({
    initialValue: yup
        .number()
        .typeError('Value must be a number')
        .required('Field is required')
        .moreThan(-1, 'Amount must be 0 or higher')
        .lessThan(1000000, 'Amount must be less than 1 000 000')
        .integer('Amount must be an integer'),
    monthlySaving: yup
        .number()
        .typeError('Value must be a number')
        .required('Field is required')
        .moreThan(-1, 'Amount must be higher than 0')
        .lessThan(1000000, 'Amount must be less than 1 000 000')
        .integer('Amount must be an integer'),
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
        .moreThan(-1, 'Amount must be higher than 0'),
});
