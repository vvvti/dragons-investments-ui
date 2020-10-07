import {useFormikContext} from 'formik';
import React from 'react';
import {Values} from '../Form/Form.types';
import {MainResult, ResultWrapper, StyledResult, StyledTitle} from './Result.styled';

export const Results = () => {
    const formik = useFormikContext<Values>().values;

    return (
        <ResultWrapper>
            <div>
                <StyledTitle>Final value of the investment</StyledTitle>
                <MainResult>{formik.initialValue} USD</MainResult>
            </div>
            <div>
                <StyledTitle>Estimated profit</StyledTitle>
                <StyledResult>{formik.monthlySaving} USD</StyledResult>
            </div>
            <div>
                <StyledTitle>Deposit value</StyledTitle>
                <StyledResult>{formik.initialValue * formik.annualProfit} USD</StyledResult>
            </div>
        </ResultWrapper>
    );
};
