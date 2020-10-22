import * as yup from 'yup';

export const validationSchema = yup.object({
    basketValue: yup
        .number()
        .typeError('Value must be a number')
        .required('Field is required')
        .moreThan(-1, 'Amount must be 0 or higher')
        .integer('Amount must be an integer')
        .max(1000000, 'You can select max 1 000 000'),
});
