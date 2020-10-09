import {Form} from 'formik';
import styled from 'styled-components';

export const StyledForm = styled(Form)`
    display: flex;
    margin: 50px auto;
    padding: 50px;
    align-items: center;
    justify-content: space-around;
    flex-shrink: 0;
    max-width: 90%;
    min-width: 1000px;
    background-color: hsl(0, 0%, 100%);
    color: hsl(0, 0%, 0%);
    border: 2px solid hsl(0, 0%, 100%);
    border-radius: 5px;
    box-shadow: 0px 0px 10px 1px hsla(0, 0%, 100%, 0.75);
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
    /* padding: 20px; */
    margin: 0 50px;
`;
