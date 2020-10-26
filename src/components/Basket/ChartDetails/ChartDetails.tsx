import React from 'react';
import {BasketFormValues} from '../../../helpers/types';
import {
    DetailsColumnWrapper,
    DetailsWrapper,
    ResultsWrapper,
    ReturnResults,
    StyledResultDetails,
    StyledReturnDetails,
    SummaryResults,
    TitleResults,
} from './ChartDetails.styled';
import {useFormikContext} from 'formik';

export const ChartDetails: React.FC = () => {
    const {
        values,
        values: {currency, basketValue},
    } = useFormikContext<BasketFormValues>();

    const calculatedStocks = Math.round(basketValue * 0.15 * 1.07);
    const calculatedBonds = Math.round(basketValue * 0.15 * 1.05);
    const calculatedCash = Math.round(basketValue * 0.15 * 1.02);

    const calculatedTotal = calculatedStocks + calculatedBonds + calculatedCash + basketValue;
    let namedCurrency;
    switch (currency) {
        case 'USD':
            namedCurrency = '$';
            break;
        case 'GBP':
            namedCurrency = '£';
            break;
        case 'EUR':
            namedCurrency = '€';
            break;
    }
    return (
        <ResultsWrapper>
            <SummaryResults>Calculation summary</SummaryResults>
            <DetailsWrapper>
                <TitleResults>Invested Value:</TitleResults>
                <StyledResultDetails value={values.basketValue} displayType={'text'} thousandSeparator={true} prefix={namedCurrency} />
            </DetailsWrapper>
            <DetailsColumnWrapper>
                <TitleResults>Assets Allocation: </TitleResults>
                <div>
                    Stocks:
                    <StyledResultDetails value={calculatedStocks} displayType={'text'} thousandSeparator={true} prefix={namedCurrency} />
                    Bonds:
                    <StyledResultDetails value={calculatedBonds} displayType={'text'} thousandSeparator={true} prefix={namedCurrency} />
                    Cash:
                    <StyledResultDetails value={calculatedCash} displayType={'text'} thousandSeparator={true} prefix={namedCurrency} />
                </div>
            </DetailsColumnWrapper>
            <DetailsWrapper>
                <ReturnResults> Total return: </ReturnResults>
                <StyledReturnDetails value={calculatedTotal} displayType={'text'} thousandSeparator={true} prefix={namedCurrency} />
            </DetailsWrapper>
        </ResultsWrapper>
    );
};
