import React from 'react';
import {BasketFormValues, FinalResults} from '../../../helpers/types';
import {
    DetailsColumnWrapper,
    DetailsWrapper,
    ResultsWrapper,
    StyledResultDetails,
    SummaryResults,
    TitleResults,
} from './ChartDetails.styled';
import {useFormikContext} from 'formik';

export const ChartDetails: React.FC<FinalResults> = ({...basketResults}) => {
    const {
        values,
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
            <SummaryResults>Summary for moderate risk</SummaryResults>
            <DetailsWrapper>
                <TitleResults>Invested Value:</TitleResults>
                <StyledResultDetails value={values.basketValue} displayType={'text'} thousandSeparator={true} prefix={namedCurrency} />
            </DetailsWrapper>
            <DetailsColumnWrapper>
                <TitleResults>Assets Allocation: </TitleResults>
                <div>
                    <StyledResultDetails
                        value={basketResults.profit?.stock}
                        displayType={'text'}
                        thousandSeparator={true}
                        prefix={`Stocks ${namedCurrency}`}
                    />
                    <StyledResultDetails
                        value={basketResults.profit?.bonds}
                        displayType={'text'}
                        thousandSeparator={true}
                        prefix={`Bonds ${namedCurrency}`}
                    />
                    <StyledResultDetails
                        value={basketResults.profit?.cash}
                        displayType={'text'}
                        thousandSeparator={true}
                        prefix={`Cash ${namedCurrency}`}
                    />
                </div>
            </DetailsColumnWrapper>
            <DetailsWrapper>
                <TitleResults> Total return: </TitleResults>
                <StyledResultDetails
                    value={basketResults.profit?.cash}
                    displayType={'text'}
                    thousandSeparator={true}
                    prefix={namedCurrency}
                />
            </DetailsWrapper>
        </ResultsWrapper>
    );
};
