import {FieldProps} from 'formik';
import {TextFieldProps} from 'material-ui';
import React from 'react';
import {StyledInput} from './FieldElement.styled';

interface LabelProps {
    label: string;
}

export const FieldElement: React.FC<FieldProps & TextFieldProps & LabelProps> = ({field, label}) => {
    return (
        <div>
            <StyledInput {...field} />
            {label}
        </div>
    );
};
