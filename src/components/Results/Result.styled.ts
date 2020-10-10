import NumberFormat from 'react-number-format';
import styled from 'styled-components';

export const StyledTitle = styled.h2`
    text-transform: uppercase;
    margin: 10px 0;
`;

export const MainTitle = styled.p`
    text-transform: uppercase;
    font-size: 38px;
    font-weight: 900;
    margin: 10px 0;
`;

export const StyledNumberFormat = styled(NumberFormat)`
    font-size: 48px;
    margin: 10px 0;
    letter-spacing: 2px;
`;

export const ResultWrapper = styled.div`
    text-align: center;
`;

export const ValuesWrapper = styled.div`
    display: flex;
    justify-content: space-around;
    font-size: 12px;
    margin: 10px 0;
`;
