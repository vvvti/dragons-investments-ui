import {useFormikContext} from 'formik';
import React, {useEffect} from 'react';
import {DISCLAIMER} from '../../helpers/constants';
import {FormValues} from '../../helpers/types';
import {useResults} from '../../hooks/useResults';
import {Chart} from '../Chart/Chart';
import {Disclaimer, MainTitle, ResultWrapper, StyledMainNumber, StyledNumberFormat, StyledTitle, ValuesWrapper} from './Result.styled';

interface IProps {
    isValid: boolean;
}

export const Results: React.FC<IProps> = ({isValid}) => {
    const {
        values,
        values: {currencyValue},
    } = useFormikContext<FormValues>();

    const {results, fetchResults} = useResults();

    useEffect(() => {
        fetchResults(values, isValid);
    }, [fetchResults, values]);

    return (
        <>
            <ResultWrapper>
                <div>
                    <MainTitle>Value of the investment</MainTitle>
                    {isValid && (
                        <StyledMainNumber
                            value={results?.finalValue}
                            displayType={'text'}
                            thousandSeparator={true}
                            prefix={currencyValue}
                        />
                    )}
                </div>
                <ValuesWrapper>
                    <div>
                        <StyledTitle>Estimated profit</StyledTitle>
                        {isValid && (
                            <StyledNumberFormat
                                value={results?.estimatedProfit}
                                displayType={'text'}
                                thousandSeparator={true}
                                prefix={currencyValue}
                            />
                        )}
                    </div>
                    <div>
                        <StyledTitle>Deposit value</StyledTitle>
                        {isValid && (
                            <StyledNumberFormat
                                value={results?.depositValue}
                                displayType={'text'}
                                thousandSeparator={true}
                                prefix={currencyValue}
                            />
                        )}
                    </div>
                </ValuesWrapper>
            </ResultWrapper>
            <Chart {...results} />
            <Disclaimer>{DISCLAIMER}</Disclaimer>
        </>
    );
};
