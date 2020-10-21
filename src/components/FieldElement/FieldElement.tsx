import {FieldProps} from 'formik';
import React from 'react';
import {StyledInput} from './FieldElement.styled';

interface IProps extends FieldProps {
    unit: string;
}

export const FieldElement: React.FC<IProps> = ({field, unit}) => {
    return (
        <label htmlFor="styledInput">
            <StyledInput type="text" maxLength={6} id="styledInput" {...field} />
            {unit}
        </label>
    );
};
