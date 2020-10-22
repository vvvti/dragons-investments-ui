import {FieldProps} from 'formik';
import React from 'react';
import NumberFormat from 'react-number-format';

export const BasketFieldElement: React.FC<FieldProps> = ({field}) => {
    return (
        <NumberFormat
            isNumericString={true}
            thousandSeparator={true}
            onValueChange={vals => setState({value: vals.formattedValue})}
            {...field}
        />
    );
};
