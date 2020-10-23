import NumberFormat from 'react-number-format';
import styled from 'styled-components';

export const DetailsWrapper = styled.div`
    display: flex;
    align-items: center;
`;

export const StyledResultDetails = styled(NumberFormat)`
    font-size: 15px;
    letter-spacing: 1px;
`;

export const StyledStockSquare = styled.div`
    margin: 0 10px;
    height: 15px;
    width: 15px;
    background-color: hsl(41, 100%, 58%);
`;
export const StyledBondsSquare = styled.div`
    margin: 0 10px;
    height: 15px;
    width: 15px;
    background-color: hsl(169, 100%, 38%);
`;
export const StyledCashSquare = styled.div`
    margin: 0 10px;
    height: 15px;
    width: 15px;
    background-color: hsl(208, 100%, 50%);
`;

export const ResultsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-self: flex-start;
    margin-left: 60px;
`;
