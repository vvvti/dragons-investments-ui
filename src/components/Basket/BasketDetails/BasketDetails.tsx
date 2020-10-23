import React from 'react';
import {FinalResults} from '../../../helpers/types';
import {DetailsWrapper, StyledStockSquare, StyledBondsSquare, StyledCashSquare, StyledResultDetails} from './BasketDetails.styled';

export const BasketDetails: React.FC<FinalResults> = ({...basketResults}) => {
    return (
        <DetailsWrapper>
            <StyledStockSquare />
            <StyledResultDetails value={basketResults.profit?.stock} displayType={'text'} thousandSeparator={true} prefix="STOCKS: $" />
            <StyledBondsSquare />
            <StyledResultDetails value={basketResults.profit?.bonds} displayType={'text'} thousandSeparator={true} prefix="BONDS: $" />
            <StyledCashSquare />
            <StyledResultDetails value={basketResults.profit?.cash} displayType={'text'} thousandSeparator={true} prefix="CASH: $" />
        </DetailsWrapper>
    );
};
