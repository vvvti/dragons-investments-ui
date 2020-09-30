import {Form} from 'formik';
import styled from 'styled-components';

export const StyledForm = styled(Form)`
    flex-basis: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 90%;
    background-color: hsl(0, 0%, 100%);
    color: hsl(0, 0%, 0%);
    border: 2px solid hsl(0, 0%, 100%);
    border-radius: 20px;
    box-shadow: 0px 0px 10px 1px hsla(0, 0%, 100%, 0.75);
`;
