import {useFormikContext} from 'formik';
import React from 'react';
import {DISCLAIMER} from '../../helpers/constants';
import {FormValues, ResultsValue} from '../../helpers/types';
import {Chart} from '../Chart/Chart';
import {Disclaimer, MainTitle, ResultWrapper, StyledMainNumber, StyledNumberFormat, StyledTitle, ValuesWrapper} from './Result.styled';

export const Results: React.FC<ResultsValue> = ({...results}) => {
    const {
        values: {currencyValue},
    } = useFormikContext<FormValues>();

    return (
        <>
            <ResultWrapper>
                <div>
                    <MainTitle>Value of the investment</MainTitle>
                    <StyledMainNumber value={results?.finalValue} displayType={'text'} thousandSeparator={true} prefix={currencyValue} />
                </div>
                <ValuesWrapper>
                    <div>
                        <StyledTitle>Estimated profit</StyledTitle>
                        <StyledNumberFormat
                            value={results?.estimatedProfit}
                            displayType={'text'}
                            thousandSeparator={true}
                            prefix={currencyValue}
                        />
                    </div>
                    <div>
                        <StyledTitle>Deposit value</StyledTitle>
                        <StyledNumberFormat
                            value={results?.depositValue}
                            displayType={'text'}
                            thousandSeparator={true}
                            prefix={currencyValue}
                        />
                    </div>
                </ValuesWrapper>
            </ResultWrapper>
            <Chart {...results} />
            <Disclaimer>{DISCLAIMER}</Disclaimer>
        </>
    );
};
