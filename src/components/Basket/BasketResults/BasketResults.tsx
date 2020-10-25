import {useFormikContext} from 'formik';
import React from 'react';
import {BasketFormValues, FinalResults} from '../../../helpers/types';
import {StyledMainResult} from './BasketResults.styled';

export const BasketResults: React.FC<FinalResults> = ({...basketResults}) => {
    const {
        values,
        values: {currency},
    } = useFormikContext<BasketFormValues>();

    console.log(basketResults);
    return (
        <div>
            <StyledMainResult value={values.basketValue} displayType={'text'} thousandSeparator={true} prefix={currency} />
            <h2>Value of the investment</h2>
        </div>
    );
};
