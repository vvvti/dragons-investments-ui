import React from 'react';
import {StyledProducts} from './Products.styled';

export const Products: React.FC = () => {
    return (
        <StyledProducts>
            <p>
                Our current offer consists of 3 packages of varying degrees of diversification. Each package consists of 3 products:
                insurance, investments and pensions. Depending on the selected package, our advisors will adapt individual products to your
                financial capabilities. Our system compares many insurance and investment companies at the same time, trying to choose the
                best products.
            </p>
            <p>Choose the best package for your possibilities and financial goals today and do not worry about the future!</p>
            <h2>Dragon Zu</h2>
            <p>This basic package includes:</p>
            <ul>
                <li>
                    <b>Insurance</b> - which covers one family member and one property
                </li>
                <li>
                    <b>Investment</b> - development of a medium-term investment plan
                </li>
                <li>
                    <b>Retirement</b> - plan your savings management so that you don't have to worry about your retirement in the future
                </li>
            </ul>
            <h2>Dragon Griffin</h2>
            <p>This standard package includes:</p>
            <ul>
                <li>
                    <b>Insurance</b> - which covers two family members and one property
                </li>
                <li>
                    <b>Investment</b> - development of a short- and medium-term investment plans for any purposes
                </li>
                <li>
                    <b>Retirement</b> - plan your savings management so that you don't have to worry about your retirement in the future
                </li>
            </ul>
            <p>Possibility of extension: Purchase of insurance for 2 movables</p>
            <h2>Dragon Draco</h2>
            <p>This premium package includes:</p>
            <ul>
                <li>
                    <b>Insurance</b> - which covers all families, all owned real estate and movables
                </li>
                <li>
                    <b>Investment</b> - development of a short-, medium- and long-term investment plans for any purposes
                </li>
                <li>
                    <b>Retirement</b> - plan your savings management so that you don't have to worry about your retirement in the future
                </li>
            </ul>
            <p>
                Please be informed that final cost for package depends on you financial possibilities. You are able to select premium amount
                for each package product.
            </p>
        </StyledProducts>
    );
};
