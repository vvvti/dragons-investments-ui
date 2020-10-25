import React from 'react';
import {Cell, Pie, PieChart, Tooltip} from 'recharts';
import {ChartContainer} from './PieChart.styled';
import {
    DetailsWrapper,
    StyledBondsSquare,
    StyledCashSquare,
    StyledResultDetails,
    StyledStockSquare,
} from '../BasketDetails/BasketDetails.styled';
import {basketDetails, riskBasket} from '../../../helpers/constants';
import {useFormikContext} from 'formik';
import {BasketFormValues} from '../../../helpers/types';

export const PieChartComponent: React.FC = (): JSX.Element => {
    const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];
    const {
        values: {riskValue},
    } = useFormikContext<BasketFormValues>();

    let riskData, tittleName;
    switch (riskValue) {
        case riskBasket.VERY_CONSERVATIVE:
            riskData = basketDetails.veryConservative;
            tittleName = 'Very Conservative';
            break;
        case riskBasket.CONSERVATIVE:
            riskData = basketDetails.conservative;
            tittleName = 'Conservative';
            break;
        case riskBasket.MODERATE:
            riskData = basketDetails.moderate;
            tittleName = 'Moderate';
            break;
        case riskBasket.AGGRESSIVE:
            riskData = basketDetails.aggressive;
            tittleName = 'Aggressive';
            break;
        case riskBasket.VERY_AGGRESSIVE:
            riskData = basketDetails.veryAggressive;
            tittleName = 'Very Aggressive';
            break;
    }

    const data = [
        {name: riskData?.stocks.name, value: riskData?.stocks.value},
        {name: riskData?.bonds.name, value: riskData?.bonds.value},
        {name: riskData?.cash.name, value: riskData?.cash.value},
    ];

    return (
        <ChartContainer>
            <h2>{tittleName}</h2>
            <PieChart width={400} height={350}>
                <Pie data={data} cx={250} cy={170} innerRadius={40} outerRadius={140} fill="#8884d8" paddingAngle={5} dataKey="value">
                    {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                </Pie>
                <Tooltip formatter={label => `${label}%`} />
            </PieChart>
            <DetailsWrapper>
                <StyledStockSquare />
                <StyledResultDetails value={riskData?.stocks.value} displayType={'text'} thousandSeparator={true} prefix="STOCKS: %" />
                <StyledBondsSquare />
                <StyledResultDetails value={riskData?.bonds.value} displayType={'text'} thousandSeparator={true} prefix="BONDS: %" />
                <StyledCashSquare />
                <StyledResultDetails value={riskData?.cash.value} displayType={'text'} thousandSeparator={true} prefix="CASH: %" />
            </DetailsWrapper>
        </ChartContainer>
    );
};
