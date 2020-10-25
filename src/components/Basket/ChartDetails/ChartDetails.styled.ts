import NumberFormat from 'react-number-format';
import styled from 'styled-components';

export const DetailsWrapper = styled.div`
    display: flex;
`;

export const StyledResultDetails = styled(NumberFormat)`
    font-size: 15px;
    letter-spacing: 1px;
`;

export const ResultsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-self: flex-start;
    margin-left: 60px;
`;

export const StyledMainResult = styled(NumberFormat)`
    font-size: 48px;
    margin: 10px 0;
    letter-spacing: 2px;
`;
