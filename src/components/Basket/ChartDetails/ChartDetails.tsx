import React from 'react';
import {FinalResults} from '../../../helpers/types';
import {ResultsWrapper, StyledResultDetails} from './ChartDetails.styled';

export const ChartDetails: React.FC<FinalResults> = ({...basketResults}) => {
    return (
        <ResultsWrapper>
            <h4>Total profit from investment:</h4>
            <StyledResultDetails value={basketResults.profit?.stock} displayType={'text'} thousandSeparator={true} prefix="Stocks: $" />
            <StyledResultDetails value={basketResults.profit?.bonds} displayType={'text'} thousandSeparator={true} prefix="Bonds: $" />
            <StyledResultDetails value={basketResults.profit?.cash} displayType={'text'} thousandSeparator={true} prefix="Cash: $" />
        </ResultsWrapper>
    );
};
