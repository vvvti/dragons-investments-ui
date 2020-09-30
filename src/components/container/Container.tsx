import React from 'react';
import {StyledContainer} from './Container.styled';

interface ContainerProps {
    title: string;
}

export const Container: React.FC<ContainerProps> = ({children, title}) => {
    return (
        <StyledContainer>
            <h1>{title}</h1>
            {children}
        </StyledContainer>
    );
};
