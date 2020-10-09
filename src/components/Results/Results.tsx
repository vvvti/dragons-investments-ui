import {useFormikContext} from 'formik';
import React from 'react';
import {CURRENCY} from '../../helpers/constants';
import {Values} from '../Form/Form.types';
import {MainTitle, ResultWrapper, StyledNumberFormat, StyledTitle, ValuesWrapper} from './Result.styled';

export const Results = () => {
    const {
        values: {initialValue, monthlySaving, savingPeriod, annualProfit, paymentFrequency},
    } = useFormikContext<Values>();

    return (
        <ResultWrapper>
            <div>
                <MainTitle>Value of the investment</MainTitle>
                <StyledNumberFormat
                    value={monthlySaving * annualProfit * 100}
                    displayType={'text'}
                    thousandSeparator={true}
                    prefix={CURRENCY}
                />
            </div>
            <ValuesWrapper>
                <div>
                    <StyledTitle>Estimated profit</StyledTitle>
                    <StyledNumberFormat
                        value={initialValue * paymentFrequency}
                        displayType={'text'}
                        thousandSeparator={true}
                        prefix={'£'}
                    />
                </div>
                <div>
                    <StyledTitle>Deposit value</StyledTitle>
                    <StyledNumberFormat
                        value={initialValue * savingPeriod}
                        displayType={'text'}
                        thousandSeparator={true}
                        prefix={CURRENCY}
                    />
                </div>
            </ValuesWrapper>
        </ResultWrapper>
    );
};
