import React from 'react';
import {BasketFormValues, FinalResults} from '../../../helpers/types';
import {DetailsWrapper, ResultsWrapper, StyledMainResult, StyledResultDetails, TitleResults} from './ChartDetails.styled';
import {useFormikContext} from 'formik';

export const ChartDetails: React.FC<FinalResults> = ({...basketResults}) => {
    const {
        values,
        values: {currency},
    } = useFormikContext<BasketFormValues>();
    return (
        <ResultsWrapper>
            <TitleResults>Total return of investment:</TitleResults>
            <StyledMainResult value={values.basketValue} displayType={'text'} thousandSeparator={true} prefix={currency} />
            <DetailsWrapper>
                <StyledResultDetails
                    value={basketResults.profit?.stock}
                    displayType={'text'}
                    thousandSeparator={true}
                    prefix={`Stocks: ${currency}`}
                />
                <StyledResultDetails
                    value={basketResults.profit?.bonds}
                    displayType={'text'}
                    thousandSeparator={true}
                    prefix={`Bonds: ${currency}`}
                />
                <StyledResultDetails
                    value={basketResults.profit?.cash}
                    displayType={'text'}
                    thousandSeparator={true}
                    prefix={`Cash: ${currency}`}
                />
            </DetailsWrapper>
        </ResultsWrapper>
    );
};
