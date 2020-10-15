import {useFormikContext} from 'formik';
import React, {useEffect} from 'react';
import {DISCLAIMER} from '../../helpers/constants';
import {useResults} from '../../hooks/useResults';
import {Chart} from '../Chart/Chart';
import {Values} from '../Form/Form.types';
import {MainTitle, ResultWrapper, StyledMainNumber, StyledNumberFormat, StyledTitle, ValuesWrapper, Disclaimer} from './Result.styled';

export const Results: React.FC = () => {
    const {
        values,
        values: {currencyValue},
    } = useFormikContext<Values>();

    const {results, fetchResults} = useResults();

    useEffect(() => {
        fetchResults(values);
    }, [fetchResults, values]);

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
