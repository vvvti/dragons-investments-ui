import {useFormikContext} from 'formik';
import React from 'react';
import {Values} from '../Form/Form.types';

export const Results = () => {
    const formik = useFormikContext<Values>();
    const values = formik.values;
    return (
        <div>
            <div>
                <h2>Final value of the investment</h2>
                <p>{values.initialValue} USD</p>
            </div>
            <div>
                <h2>Estimated profit</h2>
                <p>{values.monthlySaving} USD</p>
            </div>
            <div>
                <h2>Deposit value</h2>
                <p>{values.initialValue * values.annualProfit} USD</p>
            </div>
        </div>
    );
};
