import React from 'react';
import {StyledContainer} from './SubPages.styled';
import {BasketComponent} from '../Basket/Basket';

export const BasketPage: React.FC = () => {
    return (
        <StyledContainer>
            <BasketComponent />
        </StyledContainer>
    );
};
