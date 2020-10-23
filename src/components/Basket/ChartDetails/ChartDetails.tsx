import React from 'react';
import {FinalResults} from '../../../helpers/types';
import {
    DetailsWrapper,
    ResultsWrapper,
    StyledBondsSquare,
    StyledCashSquare,
    StyledResultDetails,
    StyledStockSquare,
} from './ChartDetails.styled';

export const ChartDetails: React.FC<FinalResults> = ({...basketResults}) => {
    return (
        <>
            <DetailsWrapper>
                <StyledStockSquare />
                <StyledResultDetails
                    value={basketResults.percentage?.stock}
                    displayType={'text'}
                    thousandSeparator={true}
                    prefix="STOCKS: "
                />
                %
                <StyledBondsSquare />
                <StyledResultDetails
                    value={basketResults.percentage?.bonds}
                    displayType={'text'}
                    thousandSeparator={true}
                    prefix="BONDS: "
                />
                %
                <StyledCashSquare />
                <StyledResultDetails value={basketResults.percentage?.cash} displayType={'text'} thousandSeparator={true} prefix="CASH: " />
                %
            </DetailsWrapper>
            <ResultsWrapper>
                <h4>Total profit from investment:</h4>
                <StyledResultDetails value={basketResults.profit?.stock} displayType={'text'} thousandSeparator={true} prefix="Stocks: $" />
                <StyledResultDetails value={basketResults.profit?.bonds} displayType={'text'} thousandSeparator={true} prefix="Bonds: $" />
                <StyledResultDetails value={basketResults.profit?.cash} displayType={'text'} thousandSeparator={true} prefix="Cash: $" />
            </ResultsWrapper>
        </>
    );
};
