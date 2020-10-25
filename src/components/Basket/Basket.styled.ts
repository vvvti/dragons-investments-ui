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
    box-shadow: 0 0 10px 1px ${colors.boxShadow};
    font-family: 'Lato', sans-serif;
`;

export const StyledHeader = styled.header`
    display: flex;
    width: 100%;
    justify-content: space-between;
    margin-bottom: 20px;
    border-bottom: 2px solid ${colors.basketBorder};
`;

export const StyledMain = styled.main`
    display: flex;
    justify-content: space-between;
    margin: 30px 0;
    min-width: 1100px;
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
    margin-left: 100px;
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

export const InputContainer = styled.div`
    display: flex;
    align-items: center;
`;

export const StyledInput = styled(NumberFormat)`
    text-align: right;
    font-weight: bold;
    font-size: 18px;
    padding: 5px 8px;
    margin: 0 20px;
    border: 1px solid ${colors.inputBorder};
    width: 250px;
`;

export const ChartWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    min-width: 450px;
`;

export const SubmitContainer = styled.div`
    display: flex;
    justify-content: space-between;
    min-width: 600px;
`;

export const StyledTitle = styled.h2`
    text-transform: uppercase;
`;
