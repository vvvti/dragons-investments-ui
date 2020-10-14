import {Form} from 'formik';
import styled from 'styled-components';
import {colors} from '../../styles/theme';

export const StyledForm = styled(Form)`
    display: flex;
    margin: 50px auto;
    padding: 50px;
    align-items: center;
    justify-content: space-around;
    flex-shrink: 0;
    max-width: 90%;
    min-width: 1000px;
    background-color: ${colors.backgroundContainer};
    color: ${colors.fontColor};
    border-radius: 5px;
    box-shadow: 0px 0px 10px 1px ${colors.boxShadow};
    font-family: 'Lato', sans-serif;
`;

export const RadioGroup = styled.div`
    display: flex;
`;

export const StyledInputWrapper = styled.div`
    display: grid;
    grid-template-columns: auto 1fr;
    grid-gap: 40px;
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

export const ErrorWrapper = styled.div`
    width: 400px;
    min-height: 50px;
    color: red;
`;
