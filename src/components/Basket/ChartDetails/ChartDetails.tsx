import React from 'react';
import {BasketFormValues, FinalResults} from '../../../helpers/types';
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

export const ChartDetails: React.FC<FinalResults> = ({...basketResults}) => {
    const {
        values: {currency},
    } = useFormikContext<BasketFormValues>();

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
