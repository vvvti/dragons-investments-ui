import styled from 'styled-components';
import {colors} from '../../../styles/theme';

export const StyledInput = styled.input`
    text-align: right;
    font-weight: bold;
    font-size: 14px;
    padding: 5px 8px;
    margin: 0px 10px;
    border: 1px solid ${colors.inputBorder};
    width: 70px;
`;
