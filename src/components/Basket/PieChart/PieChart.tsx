import React from 'react';
import {Cell, Pie, PieChart} from 'recharts';
import {ChartContainer} from './PieChart.styled';

export const PieChartComponent: React.FC = () => {
    const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];
    const data = [
        {name: 'Group A', value: 400},
        {name: 'Group B', value: 300},
        {name: 'Group C', value: 300},
        {name: 'Group D', value: 200},
    ];

    return (
        <ChartContainer>
            <PieChart width={400} height={400}>
                <Pie
                   data={data}
                   cx={120}
                   cy={200}
                   innerRadius={60}
                   outerRadius={80}
                   fill="#8884d8"
                   paddingAngle={5}
                   dataKey="value"
                >
                    {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                </Pie>
            </PieChart>
        </ChartContainer>
    );
};
