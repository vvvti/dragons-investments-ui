import {Field, Form, Formik} from 'formik';
import React from 'react';
import {FieldElement} from './fieldElement/FieldElement';
import DiscreteSlider from './slider/Slider';

interface Values {
    initialValue: number;
}

interface FormProps {
    onSubmit: (values: Values) => void;
}

export const FormComponent: React.FC<FormProps> = ({onSubmit}) => {
    return (
        <Formik
            initialValues={{initialValue: 100}}
            onSubmit={values => {
                onSubmit(values);
            }}
        >
            {({values, handleChange, handleBlur}) => (
                <Form>
                    <div>How much do you have currently saved?</div>
                    <DiscreteSlider />
                    <Field
                        name="initialValue"
                        value={values.initialValue}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        component={FieldElement}
                    />
                    <pre>{JSON.stringify(values, null, 2)}</pre>
                </Form>
            )}
        </Formik>
    );
};
