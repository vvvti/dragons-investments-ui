import {Field, Formik} from 'formik';
import React from 'react';
import {FieldElement} from './fieldElement/FieldElement';
import {FormContainer, StyledForm, StyledInputWrapper} from './Form.styled';
import Slider from './slider/Slider';

interface Values {
    initialValue: number;
    monthlySaving: number;
    savingPeriod: number;
    annualProfit: number;
}

interface FormProps {
    onSubmit: (values: Values) => void;
}

export const FormComponent: React.FC<FormProps> = ({onSubmit}) => {
    return (
        <Formik
            initialValues={{initialValue: 1000, monthlySaving: 100, savingPeriod: 2, annualProfit: 7}}
            onSubmit={values => {
                onSubmit(values);
            }}
        >
            {({values}) => (
                <StyledForm>
                    <FormContainer>
                        <h2>How much do you have currently saved?</h2>
                        <StyledInputWrapper>
                            <Slider />
                            <Field name="initialValue" value={values.initialValue} component={FieldElement} unit="USD" />
                        </StyledInputWrapper>
                    </FormContainer>
                    <FormContainer>
                        <h2>How much do you want to save monthly?</h2>
                        <StyledInputWrapper>
                            <Slider />
                            <Field name="monthlySaving" value={values.monthlySaving} component={FieldElement} unit="USD" />
                        </StyledInputWrapper>
                    </FormContainer>
                    <FormContainer>
                        <h2>How long do you plan to invest?</h2>
                        <StyledInputWrapper>
                            <Slider />
                            <Field name="savingPeriod" value={values.savingPeriod} component={FieldElement} unit="Years" />
                        </StyledInputWrapper>
                    </FormContainer>
                    <FormContainer>
                        <h2>What is your expected annual profit?</h2>
                        <StyledInputWrapper>
                            <Slider />
                            <Field name="annualProfit" value={values.annualProfit} component={FieldElement} unit="%" />
                        </StyledInputWrapper>
                    </FormContainer>
                    <pre>{JSON.stringify(values, null, 2)}</pre>
                </StyledForm>
            )}
        </Formik>
    );
};
