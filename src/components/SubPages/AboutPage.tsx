import React from 'react';
import {StyledCalculator, StyledContainer, StyledText, StyledTitle} from './SubPages.styled';
import calculator from '../../assets/calculator.png';

export const AboutPage: React.FC = () => {
    return (
        <StyledContainer>
            <StyledTitle>About</StyledTitle>
            <StyledText>
                Draco calculator is an investment calculator which helps users to make a decision regarding their savings and investments.
                If You wonder which solution will be the best for you at Draco calculator, we have prepared a wide range of investment
                calculators for you, thanks to which choosing the right path to multiply money will not be so difficult. Our investment
                calculators are completely free applications that are updated regularly. This way you will get reliable results, enabling
                you to choose the optimal product.
            </StyledText>
            <StyledCalculator src={calculator} alt="Calculator" />
        </StyledContainer>
    );
};
