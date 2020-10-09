import {useFormikContext} from 'formik';
import React from 'react';
import {CartesianGrid, Line, LineChart, Tooltip, XAxis, YAxis} from 'recharts';
import {Values} from '../Form/Form.types';

export const Chart = () => {
    const {
        values: {initialValue, monthlySaving, savingPeriod, annualProfit, paymentFrequency},
    } = useFormikContext<Values>();

    //Random formulas for calculating start and end value

    const data = [
        {
            name: 'Start',
            initialResult: initialValue,
            endResult: initialValue,
        },
        {
            name: 'Final Result',
            initialResult: initialValue * annualProfit * paymentFrequency,
            endResult: monthlySaving * savingPeriod,
        },
    ];
    return (
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
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="initialResult" stroke="#8884d8" activeDot={{r: 8}} />
            <Line type="monotone" dataKey="endResult" stroke="#82ca9d" />
        </LineChart>
    );
};
