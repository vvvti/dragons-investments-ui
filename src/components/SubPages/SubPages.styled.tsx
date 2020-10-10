import styled from 'styled-components';
import {colors} from '../../styles/theme';

export const StyledContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin: 50px auto;
    align-items: center;
    justify-content: space-around;
    flex-shrink: 0;
    max-width: 90%;
    min-width: 1000px;
    background-color: ${colors.backgroundContainer};
    color: ${colors.fontColor};
    border-radius: 5px;
    box-shadow: 0px 0px 10px 1px ${colors.boxShadow};
    font-family: 'lato';
`;

export const StyledTitle = styled.h1`
    text-transform: uppercase;
    font-weight: 900;
`;

export const StyledText = styled.p`
    line-height: 1.5;
    font-style: italic;
    text-align: center;
`;
