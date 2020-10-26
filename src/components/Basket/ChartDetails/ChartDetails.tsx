import React from 'react';
import {BasketFormValues, FinalResults} from '../../../helpers/types';
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
import {useFormikContext} from 'formik';
import {riskBasket} from '../../../helpers/constants';

export const ChartDetails: React.FC<FinalResults> = ({...basketResults}) => {
    const {
        values: {riskType},
    } = useFormikContext<BasketFormValues>();

    let namedCurrency;
    switch (basketResults.currency) {
        case 'riskBasket.VERY_CONSERVATIVE':
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
            <SummaryResults>
                Summary for
                <StyledText>
                    {riskType === riskBasket.VERY_AGGRESSIVE && 'VERY AGGRESSIVE'}
                    {riskType === riskBasket.AGGRESSIVE && 'AGGRESSIVE'}
                    {riskType === riskBasket.MODERATE && 'MODERATE'}
                    {riskType === riskBasket.CONSERVATIVE && 'CONSERVATIVE'}
                    {riskType === riskBasket.VERY_CONSERVATIVE && 'VERY CONSERVATIVE'}
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
