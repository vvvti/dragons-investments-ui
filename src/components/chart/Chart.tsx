import {useFormikContext} from 'formik';
import React from 'react';
import {CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis, YAxis} from 'recharts';

interface IProps {
    // data: {
    //     name: string;
    //     uv: number;
    //     pv: number;
    //     amt: number;
    // }[];
}

interface Props {
    initialValue: number;
    monthlySaving: number;
    savingPeriod: number;
    annualProfit: number;
}

export const Chart = () => {
    const formik = useFormikContext<Props>();
    const dataFormik = formik.values;
    console.log(dataFormik.initialValue, dataFormik.monthlySaving, dataFormik.savingPeriod, dataFormik.annualProfit);

    //Random formulas for calculating uv and pv
    const data = [
        {
            name: 'estimated profit',
            iv: dataFormik.initialValue,
            ep: dataFormik.initialValue,
        },
        {
            name: 'investment value',
            iv: dataFormik.savingPeriod * dataFormik.initialValue,
            ep: dataFormik.savingPeriod * dataFormik.initialValue * dataFormik.annualProfit,
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
            <XAxis dataKey={dataFormik.savingPeriod} />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="iv" stroke="#8884d8" activeDot={{r: 8}} />
            <Line type="monotone" dataKey="ep" stroke="#82ca9d" />
        </LineChart>
    );
};
