import {useFormikContext} from 'formik';
import React from 'react';
import {CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis, YAxis} from 'recharts';
import {Values} from '../form/Form.types';

export const Chart = () => {
    const formik = useFormikContext<Values>();
    const initialValueChart = formik.values.initialValue;
    const monthlySavingChart = formik.values.monthlySaving;
    const savingPeriodChart = formik.values.savingPeriod;
    const annualProfitChart = formik.values.annualProfit;

    //Random formulas for calculating start and end value
    const data = [
        {
            name: 'start value',
            iv: initialValueChart,
            ep: initialValueChart,
        },
        {
            name: 'end value',
            iv: initialValueChart * annualProfitChart,
            ep: monthlySavingChart * savingPeriodChart,
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
            <XAxis dataKey={savingPeriodChart} />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="iv" stroke="#8884d8" activeDot={{r: 8}} />
            <Line type="monotone" dataKey="ep" stroke="#82ca9d" />
        </LineChart>
    );
};
