import {TextField} from '@material-ui/core';
import React from 'react';

interface FormProps {
    onSubmit: () => void;
}

export const FormComponent: React.FC<FormProps> = ({}) => {
    return <TextField />;
};
