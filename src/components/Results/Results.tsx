import {useFormikContext} from 'formik';
import React from 'react';
import {Values} from '../Form/Form.types';

export const Results = () => {
    const formik = useFormikContext<Values>().values;

    return (
        <div>
            <div>
                <h2>Final value of the investment</h2>
                <p>{formik.initialValue} USD</p>
            </div>
            <div>
                <h2>Estimated profit</h2>
                <p>{formik.monthlySaving} USD</p>
            </div>
            <div>
                <h2>Deposit value</h2>
                <p>{formik.initialValue * formik.annualProfit} USD</p>
            </div>
        </div>
    );
};
