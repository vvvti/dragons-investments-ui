import styled from 'styled-components';
import NumberFormat from 'react-number-format';

export const ChartContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const DetailsWrapper = styled.div`
    display: flex;
    justify-content: space-around;
    min-width: 450px;
`;

export const StyledResultDetails = styled(NumberFormat)`
    font-size: 15px;
    margin-left: 10px;
    letter-spacing: 1px;
`;

export const StyledStockSquare = styled.div`
    height: 15px;
    width: 15px;
    background-color: hsl(208, 100%, 50%);
`;
export const StyledBondsSquare = styled.div`
    height: 15px;
    width: 15px;
    background-color: hsl(169, 100%, 38%);
`;
export const StyledCashSquare = styled.div`
    height: 15px;
    width: 15px;
    background-color: hsl(41, 100%, 58%);
`;

export const MainTitle = styled.h2`
    text-transform: uppercase;
    font-size: 38px;
    margin: 10px;
`;

export const NumberContainer = styled.div`
    display: flex;
    min-width: 120px;
`;
