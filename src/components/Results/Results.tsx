import {useFormikContext} from 'formik';
import React, {useEffect} from 'react';
import {DISCLAIMER} from '../../helpers/constants';
import {FormValues} from '../../helpers/types';
import {useResults} from '../../hooks/useResults';
import {Chart} from '../Chart/Chart';
import {Disclaimer, MainTitle, ResultWrapper, StyledMainNumber, StyledNumberFormat, StyledTitle, ValuesWrapper} from './Result.styled';

export const Results: React.FC = () => {
    const {
        values,
        isValid,
        values: {currencyValue},
    } = useFormikContext<FormValues>();

    const {results, fetchResults} = useResults();

    useEffect(() => {
        if (isValid) {
            fetchResults(values);
        }
    }, [fetchResults, values, isValid]);

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
