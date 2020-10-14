import {useFormikContext} from 'formik';
import React from 'react';
import {Values} from '../Form/Form.types';
import {MainTitle, ResultWrapper, StyledMainNumber, StyledNumberFormat, StyledTitle, ValuesWrapper} from './Result.styled';

export const Results: React.FC = () => {
    const {
        values: {initialValue, monthlySaving, savingPeriod, annualProfit, paymentFrequency, currencyValue},
    } = useFormikContext<Values>();

    return (
        <ResultWrapper>
            <div>
                <MainTitle>Value of the investment</MainTitle>
                <StyledMainNumber
                    value={monthlySaving * annualProfit * 100}
                    displayType={'text'}
                    thousandSeparator={true}
                    prefix={currencyValue}
                />
            </div>
            <ValuesWrapper>
                <div>
                    <StyledTitle>Estimated profit</StyledTitle>
                    <StyledNumberFormat
                        value={initialValue * +paymentFrequency}
                        displayType={'text'}
                        thousandSeparator={true}
                        prefix={currencyValue}
                    />
                </div>
                <div>
                    <StyledTitle>Deposit value</StyledTitle>
                    <StyledNumberFormat
                        value={initialValue * savingPeriod}
                        displayType={'text'}
                        thousandSeparator={true}
                        prefix={currencyValue}
                    />
                </div>
            </ValuesWrapper>
        </ResultWrapper>
    );
};
