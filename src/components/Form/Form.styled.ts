import {Form} from 'formik';
import NumberFormat from 'react-number-format';
import styled from 'styled-components';
import {colors, defaultBorderRadius} from '../../styles/theme';

export const StyledForm = styled(Form)`
    display: flex;
    margin: 50px auto;
    padding: 50px 100px;
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

export const RadioGroup = styled.div`
    display: flex;
`;

export const StyledInputWrapper = styled.div`
    display: grid;
    grid-template-columns: auto 1fr;
    grid-template-rows: 40px 15px;
    align-items: center;
`;

export const FormContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    min-width: 500px;
`;

export const StyledResults = styled.div`
    text-align: center;
    margin: 0 50px;
`;

export const StyledSlider = styled.div`
    width: 300px;
`;

export const ErrorMessage = styled.div`
    color: red;
`;

export const CurrencyContainer = styled.div`
    display: flex;
    align-items: center;
`;

export const PrefixWrapper = styled.div`
    display: flex;
    align-items: center;
`;

export const CurrencyTitle = styled.h2`
    margin: 0 10px 0 0;
`;

export const StyledInput = styled(NumberFormat)`
    text-align: right;
    font-weight: bold;
    font-size: 14px;
    padding: 5px 8px;
    margin: 0px 10px;
    border: 1px solid ${colors.inputBorder};
    width: 80px;
`;
