import React from 'react';
import {StyledContainer} from './SubPages.styled';
import {BasketComponent} from '../Basket/Basket';

const BasketPage: React.FC = () => {
    return (
        <StyledContainer>
            <BasketComponent />
        </StyledContainer>
    );
};

export default BasketPage;
