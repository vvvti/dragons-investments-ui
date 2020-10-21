import {useFormikContext} from 'formik';
import React from 'react';
import {CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis, YAxis} from 'recharts';
import {currencyFormat} from '../../helpers/currencyFormat';
import {FormValues, ResultsValue} from '../../helpers/types';
import {ChartContainer} from './Chart.styled';

export const Chart: React.FC<ResultsValue> = ({...results}) => {
    const {
        values: {currencyValue},
    } = useFormikContext<FormValues>();

    console.log(
        'results',
        results.chartData?.map(item => item.deposit),
    );

    const data = results.chartData;

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
                <Tooltip formatter={label => currencyFormat(label, currencyValue)} />
                {/* formatter={currencyFormat} */}
                <Line type="monotone" dataKey="deposit" stroke="#00e0b4" activeDot={{r: 8}} />
                <Line type="monotone" dataKey="profit" stroke="#071e4a" />
                <Line type="monotone" dataKey="investmentValue" stroke="#ff0000" />
            </LineChart>
        </ChartContainer>
    );
};
