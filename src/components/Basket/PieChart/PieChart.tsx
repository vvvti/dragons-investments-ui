import React from 'react';
import {Cell, Pie, PieChart, Tooltip} from 'recharts';
import {
    ChartContainer,
    DetailsWrapper,
    MainTitle,
    NumberContainer,
    StyledBondsSquare,
    StyledCashSquare,
    StyledResultDetails,
    StyledStockSquare,
} from './PieChart.styled';
import {basketDetails, riskBasket} from '../../../helpers/constants';
import {useFormikContext} from 'formik';
import {BasketFormValues} from '../../../helpers/types';

export const PieChartComponent: React.FC = (): JSX.Element => {
    const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];
    const {
        values: {riskValue},
    } = useFormikContext<BasketFormValues>();

    let riskData, titleName;
    switch (riskValue) {
        case riskBasket.VERY_CONSERVATIVE:
            riskData = basketDetails.veryConservative;
            titleName = 'Very Conservative';
            break;
        case riskBasket.CONSERVATIVE:
            riskData = basketDetails.conservative;
            titleName = 'Conservative';
            break;
        case riskBasket.MODERATE:
            riskData = basketDetails.moderate;
            titleName = 'Moderate';
            break;
        case riskBasket.AGGRESSIVE:
            riskData = basketDetails.aggressive;
            titleName = 'Aggressive';
            break;
        case riskBasket.VERY_AGGRESSIVE:
            riskData = basketDetails.veryAggressive;
            titleName = 'Very Aggressive';
            break;
    }

    const data = [
        {name: riskData?.stocks.name, value: riskData?.stocks.value},
        {name: riskData?.bonds.name, value: riskData?.bonds.value},
        {name: riskData?.cash.name, value: riskData?.cash.value},
    ];

    return (
        <ChartContainer>
            <MainTitle>{titleName}</MainTitle>
            <PieChart width={400} height={350}>
                <Pie data={data} cx={200} cy={150} innerRadius={40} outerRadius={140} fill="#8884d8" paddingAngle={5} dataKey="value">
                    {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                </Pie>
                <Tooltip formatter={label => `${label}%`} />
            </PieChart>
            <DetailsWrapper>
                <NumberContainer>
                    <StyledStockSquare />
                    <StyledResultDetails value={riskData?.stocks.value} displayType={'text'} thousandSeparator={true} prefix="STOCKS: " />%
                </NumberContainer>
                <NumberContainer>
                    <StyledBondsSquare />
                    <StyledResultDetails value={riskData?.bonds.value} displayType={'text'} thousandSeparator={true} prefix="BONDS: " />%
                </NumberContainer>
                <NumberContainer>
                    <StyledCashSquare />
                    <StyledResultDetails value={riskData?.cash.value} displayType={'text'} thousandSeparator={true} prefix="CASH: " />%
                </NumberContainer>
            </DetailsWrapper>
        </ChartContainer>
    );
};
