import styled from 'styled-components';
import {colors} from '../../../styles/theme';

export const StyledInput = styled.input`
    text-align: right;
    font-weight: bold;
    font-size: 18px;
    padding: 5px 8px;
    margin: 0px 20px;
    border: 1px solid ${colors.inputBorder};
    width: 250px;
`;
