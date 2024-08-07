import React from 'react';
import {FinalResults} from '../../../helpers/types';
import {
    DetailsColumnWrapper,
    DetailsWrapper,
    ResultsWrapper,
    ReturnResults,
    StyledResultDetails,
    StyledReturnDetails,
    StyledText,
    SummaryResults,
    TitleResults,
} from './ChartDetails.styled';

export const ChartDetails: React.FC<FinalResults> = ({...basketResults}) => {
    let namedCurrency;

    switch (basketResults.currency) {
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
        <ResultsWrapper data-testid={'basket-results'}>
            <SummaryResults>
                Summary for
                <StyledText>
                    {basketResults.riskType === 'VERY_AGGRESSIVE' && 'VERY AGGRESSIVE'}
                    {basketResults.riskType === 'AGGRESSIVE' && 'AGGRESSIVE'}
                    {basketResults.riskType === 'MODERATE' && 'MODERATE'}
                    {basketResults.riskType === 'CONSERVATIVE' && 'CONSERVATIVE'}
                    {basketResults.riskType === 'VERY_CONSERVATIVE' && 'VERY CONSERVATIVE'}
                </StyledText>
                risk
            </SummaryResults>
            <DetailsWrapper>
                <TitleResults>Invested Value:</TitleResults>
                <StyledResultDetails
                    value={basketResults?.basketValue}
                    displayType={'text'}
                    thousandSeparator={true}
                    prefix={namedCurrency}
                />
            </DetailsWrapper>
            <DetailsColumnWrapper>
                <TitleResults>Assets Allocation: </TitleResults>
                <div>
                    Stocks:
                    <StyledResultDetails
                        value={basketResults.profit?.stock}
                        displayType={'text'}
                        thousandSeparator={true}
                        prefix={namedCurrency}
                    />
                    Bonds:
                    <StyledResultDetails
                        value={basketResults.profit?.bonds}
                        displayType={'text'}
                        thousandSeparator={true}
                        prefix={namedCurrency}
                    />
                    Cash:
                    <StyledResultDetails
                        value={basketResults.profit?.cash}
                        displayType={'text'}
                        thousandSeparator={true}
                        prefix={namedCurrency}
                    />
                </div>
            </DetailsColumnWrapper>
            <DetailsWrapper>
                <ReturnResults> Total return: </ReturnResults>
                <StyledReturnDetails
                    value={basketResults.totalAmount}
                    displayType={'text'}
                    thousandSeparator={true}
                    prefix={namedCurrency}
                />
            </DetailsWrapper>
        </ResultsWrapper>
    );
};
