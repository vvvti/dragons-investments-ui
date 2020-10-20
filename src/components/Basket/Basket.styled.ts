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

export const StyledInputWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const FormContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    min-width: 500px;
`;

export const StyledResults = styled.div`
    margin: 0 50px;
`;

export const StyledSlider = styled.div`
    align-self: flex-end;
    width: 500px;
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
