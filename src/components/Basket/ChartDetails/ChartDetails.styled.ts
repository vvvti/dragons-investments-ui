import NumberFormat from 'react-number-format';
import styled from 'styled-components';

export const DetailsWrapper = styled.div`
    display: flex;
    margin: 20px 0;
`;

export const StyledResultDetails = styled(NumberFormat)`
    font-size: 20px;
    letter-spacing: 1px;
    margin-right: 10px;
`;

export const ResultsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-self: flex-start;
    margin: 40px 0 20px 0;
`;

export const StyledMainResult = styled(NumberFormat)`
    font-size: 48px;
    letter-spacing: 2px;
    margin: 10px;
`;

export const TitleResults = styled.div`
    text-transform: uppercase;
    font-weight: 900;
    font-size: 20px;
    margin-right: 10px;
`;

export const DetailsColumnWrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

export const SummaryResults = styled.div`
    text-transform: uppercase;
    font-weight: 900;
    font-size: 30px;
    margin-top: 20px;
`;
