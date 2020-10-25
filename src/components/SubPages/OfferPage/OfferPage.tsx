import React from 'react';
import {OfferFirst} from './OfferFirst';
import {OfferSecond} from './OfferSecond';
import {OfferThird} from './OfferThird';
import {StyledOfferPage} from './OfferPage.styled';
import {StyledContainer} from '../SubPages.styled';

export const OfferPage: React.FC = () => {
    return (
        <StyledContainer>
            <StyledOfferPage>
                <div>
                    <p>
                        Our current offer consists of 3 packages of varying degrees of diversification. Each package consists of 3 products:
                        insurance, investments and pensions. Depending on the selected package, our advisors will adapt individual products
                        to your financial capabilities. Our system compares many insurance and investment companies at the same time, trying
                        to choose the best products.
                    </p>
                    <p>Choose the best package for your possibilities and financial goals today and do not worry about the future!</p>
                </div>
                <OfferFirst />
                <OfferSecond />
                <OfferThird />
                <p>
                    Please be informed that final cost for package depends on you financial possibilities. You are able to select premium
                    amount for each package product.
                </p>
            </StyledOfferPage>
        </StyledContainer>
    );
};
