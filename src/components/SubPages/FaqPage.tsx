import React from 'react';
import {StyledContainer, StyledTitle, StyledText} from './SubPages.styled';

export const FaqPage: React.FC = () => {
    return (
        <StyledContainer>
            <StyledTitle>Faq</StyledTitle>
            <h4>Q:”How does the Draco calculator work?”</h4>
            <StyledText>
                We are giving in your hands a tool which will calculate your investment choices. Provide amounts in right sections by using
                a slider or by entering the amount in the box and click calculate. Based on provided numbers our tool will display final
                results and present it on a graph.
            </StyledText>
            <h4>Q:”What are the advantages of systematic saving?”</h4>
            <StyledText>
                Systematic saving consists in regular putting aside even small amounts, which thanks to the so-called compound interest
                allows you to effectively multiply capital.
            </StyledText>
            <h4>Q:”How to choose the best regular saving plan?”</h4>
            <StyledText>
                It is an individual matter that depends on several factors. How long do you want to save - do you prefer to choose a product
                for a shorter or longer period? How much amount and how often can you allocate? Do you prefer higher profits or stability
                and less risk? For what purpose do you want to save? We encourage you to contact an expert who will help you make the right
                decision.
            </StyledText>
            <h4>Q:” Who is the systematic saving program for?</h4>
            <StyledText>
                For everyone who wants to save money effectively. Regardless of whether it has small or large sums. It is about collecting
                savings that can be used in the future.
            </StyledText>
            <h4>Q:” When is it worth investing in mutual funds?</h4>
            <StyledText>
                If an investment in a fund is planned for a sufficiently long period, virtually any time is good to start it. The risk
                associated with investing is inherent and cannot be completely eliminated.
            </StyledText>
        </StyledContainer>
    );
};
