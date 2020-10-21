import {FieldProps} from 'formik';
import React from 'react';
import {StyledInput} from './BasketFieldElement.styled';

// export interface IBasketProps {
//     currency: string;
// }

export const BasketFieldElement: React.FC<FieldProps> = ({field}) => {
    return (
        <label htmlFor="styledInput">
            <StyledInput type="text" maxLength={10} id="styledInput" {...field} />
        </label>
    );
};
