import React from 'react';
import {StyledAssumption} from './Assumption.styled';

export const Assumption: React.FC = () => {
    return (
        <StyledAssumption>
            <h2>Our Assumptions</h2>
            <p>
                <b>Investment Period:</b> We assume a 30 year investment horizon.
            </p>
            <p>
                <b>Investment Returns:</b> We use historical results and assume an average ROI: Stocks: 7%, Bonds 5%, Cash: 2%.
            </p>
            <p>
                <b>Expected Returns Calculation:</b> We use a Monte Carlo simulation of 10,000 portfolios to calculate expected returns.The
                presented results do not include inflation.
            </p>
            <p>
                Information and interactive calculators are made available to you as self-help tools for your independent use and are not
                intended to provide investment advice. All examples are hypothetical and are for illustrative purposes. We encourage you to
                seek personalized advice form qualified professionals regarding all personal finance issue
            </p>
        </StyledAssumption>
    );
};
