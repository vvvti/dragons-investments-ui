import {useFormikContext} from 'formik';
import React from 'react';
import {CartesianGrid, Line, LineChart, Tooltip, XAxis, YAxis} from 'recharts';
import {Values} from '../Form/Form.types';
import {ChartContainer} from './Chart.styled';

export const Chart: React.FC = () => {
    const {
        values,
        values: {monthlySaving},
    } = useFormikContext<Values>();

    //Random formulas for calculating start and end value
    // label={{value: 'index', position: 'insideLeft', dy: 10}}

    const createArray = (values: Values) => {
        let data = [];
        let len = +values.savingPeriod + 1;
        for (let i = 0; i < len; i++) {
            data.push({
                key: `${i}Y`,
                deposit: values.monthlySaving * i * 10 * 1.1,
                profit: values.paymentFrequency * monthlySaving * i,
                investmentValue: values.initialValue * i,
            });
        }
        return data;
    };

    const data = createArray(values);

    return (
        <ChartContainer>
            <LineChart
                width={500}
                height={300}
                data={data}
                margin={{
                    top: 5,
                    right: 100,
                    left: 20,
                    bottom: 5,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="key" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="deposit" stroke="#00e0b4" activeDot={{r: 8}} />
                <Line type="monotone" dataKey="profit" stroke="#071e4a" />
                <Line type="monotone" dataKey="investmentValue" stroke="#ff0000" />
            </LineChart>
        </ChartContainer>
    );
};
