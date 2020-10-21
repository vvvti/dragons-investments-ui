import {useFormikContext} from 'formik';
import React, {useEffect} from 'react';
import {BasketFormValues} from '../../../helpers/types';
import {useBasket} from '../../../hooks/useBasket';
import {StyledMainResult} from './BasketResults.styled';

export const BasketResults: React.FC = () => {
    const {
        values,
        values: {currencyBasketValue},
        isValid,
    } = useFormikContext<BasketFormValues>();
    const {basketValues, fetchResults} = useBasket();

    //waiting for backend setup
    console.log('basket from API:', basketValues);

    useEffect(() => {
        fetchResults(values);
    }, [fetchResults, values]);
    return (
        <div>
            <StyledMainResult value={values.basketValue} displayType={'text'} thousandSeparator={true} prefix={currencyBasketValue} />
            <h2>Value of the investment</h2>
        </div>
    );
};
