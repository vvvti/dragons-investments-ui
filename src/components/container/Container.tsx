import React from 'react';
import {StyledContainer} from './Container.styled';

interface ContainerProps {
    title?: string;
}

export const Container: React.FC<ContainerProps> = ({children}) => {
    return <StyledContainer>{children}</StyledContainer>;
};
