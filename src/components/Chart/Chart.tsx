import {useFormikContext} from 'formik';
import React from 'react';
import {CartesianGrid, Line, LineChart, Tooltip, YAxis} from 'recharts';
import {Values} from '../Form/Form.types';
import {ChartContainer} from './Chart.styled';

export const Chart: React.FC = () => {
    const {
        values: {initialValue, monthlySaving, savingPeriod, annualProfit, paymentFrequency},
    } = useFormikContext<Values>();

    //Random formulas for calculating start and end value

    const data = [
        {
            name: '0',
            deposit: initialValue,
            profit: initialValue,
            investmentValue: initialValue,
        },
        {
            name: '1',
            deposit: initialValue * annualProfit * paymentFrequency,
            profit: monthlySaving * savingPeriod * 5,
            investmentValue: initialValue * savingPeriod,
        },
        {
            name: '2',
            deposit: initialValue * annualProfit * paymentFrequency,
            profit: monthlySaving * savingPeriod * 5,
            investmentValue: initialValue * savingPeriod,
        },
        {
            name: '3',
            deposit: initialValue * annualProfit * paymentFrequency,
            profit: monthlySaving * savingPeriod * 5,
            investmentValue: initialValue * savingPeriod,
        },
    ];
    return (
        <ChartContainer>
            <LineChart
                width={500}
                height={300}
                data={data}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                {/* <XAxis dataKey="name" /> */}
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="deposit" stroke="#00e0b4" activeDot={{r: 8}} />
                <Line type="monotone" dataKey="profit" stroke="#071e4a" />
                <Line type="monotone" dataKey="investmentValue" stroke="#ff0000" />
            </LineChart>
        </ChartContainer>
    );
};
