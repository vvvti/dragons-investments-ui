import {TextField} from '@material-ui/core';
import {FieldProps} from 'formik';
import {TextFieldProps} from 'material-ui';
import React from 'react';

export const FieldElement: React.FC<FieldProps & TextFieldProps> = ({field}) => {
    return <TextField id="outlined-basic" label="USD" variant="outlined" {...field} />;
};
