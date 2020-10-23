import React from 'react';
import {Cell, Pie, PieChart, Tooltip} from 'recharts';
import {ChartContainer} from './PieChart.styled';

export const PieChartComponent: React.FC = () => {
    const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];
    const data = [
        {name: 'Cash', value: 60},
        {name: 'Bonds', value: 20},
        {name: 'Stocks', value: 20},
    ];

    return (
        <ChartContainer>
            <PieChart width={400} height={350}>
                <Pie data={data} cx={250} cy={170} innerRadius={40} outerRadius={140} fill="#8884d8" paddingAngle={5} dataKey="value">
                    {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                </Pie>
                <Tooltip formatter={label => `${label}%`} />
            </PieChart>
        </ChartContainer>
    );
};
