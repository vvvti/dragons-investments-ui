import NumberFormat from 'react-number-format';
import styled from 'styled-components';

export const DetailsWrapper = styled.div`
    display: flex;
    align-items: center;
    max-width: 300px;
`;

export const StyledResultDetails = styled(NumberFormat)`
    font-size: 15px;
    margin: 0px 20px 0px 10px;
    letter-spacing: 1px;
`;

export const StyledStockSquare = styled.div`
    height: 15px;
    width: 15px;
    background-color: hsl(41, 100%, 58%);
`;
export const StyledBondsSquare = styled.div`
    height: 15px;
    width: 15px;
    background-color: hsl(169, 100%, 38%);
`;
export const StyledCashSquare = styled.div`
    height: 15px;
    width: 15px;
    background-color: hsl(208, 100%, 50%);
`;
