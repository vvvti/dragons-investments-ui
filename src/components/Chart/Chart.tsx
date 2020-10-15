import {useFormikContext} from 'formik';
import React from 'react';
import {CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis, YAxis} from 'recharts';
import {ResultsValue, Values} from '../Form/Form.types';
import {ChartContainer} from './Chart.styled';

export const Chart: React.FC<ResultsValue> = ({...results}) => {
    const {values} = useFormikContext<Values>();

    const createArray = ({savingPeriod, monthlySaving, annualProfit, paymentFrequency, initialValue}: Values) => {
        let data = [];
        let len = savingPeriod + 1;
        for (let i = 0; i < len; i++) {
            data.push({
                key: `${i}Y`,
                deposit: savingPeriod * monthlySaving * i,
                profit: savingPeriod * annualProfit * +paymentFrequency * savingPeriod * 10 * i,
                investmentValue: savingPeriod * initialValue * i,
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
                <Legend />
                <Tooltip />
                <Line type="monotone" dataKey="deposit" stroke="#00e0b4" activeDot={{r: 8}} />
                <Line type="monotone" dataKey="profit" stroke="#071e4a" />
                <Line type="monotone" dataKey="investmentValue" stroke="#ff0000" />
            </LineChart>
        </ChartContainer>
    );
};
