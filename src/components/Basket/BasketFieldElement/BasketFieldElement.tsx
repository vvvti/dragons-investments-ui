import {FieldProps} from 'formik';
import React from 'react';
import {StyledInput} from './BasketFieldElement.styled';

interface IProps extends FieldProps {
    unit: string;
}

export const BasketFieldElement: React.FC<IProps> = ({field, unit}) => {
    return (
        <label htmlFor="styledInput">
            <StyledInput id="styledInput" {...field} type="number" />
            {unit}
        </label>
    );
};
