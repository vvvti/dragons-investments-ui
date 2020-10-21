import {Form} from 'formik';
import NumberFormat from 'react-number-format';
import styled from 'styled-components';
import {colors, defaultBorderRadius} from '../../styles/theme';

export const StyledBasketForm = styled(Form)`
    display: flex;
    flex-direction: column;
    margin: 20px 50px;
    align-items: center;
    justify-content: space-around;
    flex-shrink: 0;
    max-width: 85%;
    min-width: 1000px;
    background-color: ${colors.backgroundContainer};
    color: ${colors.fontColor};
    border-radius: ${defaultBorderRadius};
    box-shadow: 0px 0px 10px 1px ${colors.boxShadow};
    font-family: 'Lato', sans-serif;
`;

export const StyledHeader = styled.header`
    display: flex;
    width: 100%;
    justify-content: space-between;
    border-bottom: 2px solid grey;
    margin-bottom: 20px;
`;

export const StyledMain = styled.main`
    display: flex;
    justify-content: space-space-between;
`;

export const StyledInputWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const FormContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 600px;
`;

export const StyledSlider = styled.div`
    align-self: center;
    width: 450px;
`;

export const ErrorMessage = styled.div`
    color: red;
`;

export const CurrencyContainer = styled.div`
    display: flex;
    align-items: center;
`;

export const CurrencyTitle = styled.h2`
    margin: 0 10px 0 0;
`;

export const InputContainer = styled.div`
    display: flex;
    align-items: center;
`;

export const StyledMainResult = styled(NumberFormat)`
    font-size: 48px;
    margin: 10px 0;
    letter-spacing: 2px;
`;
