import {Field, Formik} from 'formik';
import React from 'react';
import {Chart} from '../chart/Chart';
import {FieldElement} from './fieldElement/FieldElement';
import {FormContainer, RadioGroup, StyledForm, StyledInputWrapper} from './Form.styled';
import {Values} from './Form.types';
import {FrequencyRadio} from './radio/FrequencyRadio';
import Slider from './slider/Slider';

interface FormProps {
    onSubmit: (values: Values) => void;
}

export const FormComponent: React.FC<FormProps> = ({onSubmit}) => {
    return (
        <Formik
            initialValues={{initialValue: 1000, monthlySaving: 100, savingPeriod: 2, annualProfit: 7, paymentFrequency: ''}}
            onSubmit={values => {
                onSubmit(values);
            }}
        >
            {({values}) => (
                <StyledForm>
                    <div>
                        <pre>{JSON.stringify(values, null, 2)}</pre>
                        <Chart />
                    </div>
                    <div>
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
                        <FormContainer>
                            <h2>Frequency Payment:</h2>
                            <StyledInputWrapper>
                                <RadioGroup>
                                    <FrequencyRadio name="paymentFrequency" type="radio" value="1" label="month" />
                                    <FrequencyRadio name="paymentFrequency" type="radio" value="3" label="quater" />
                                    <FrequencyRadio name="paymentFrequency" type="radio" value="6" label="half-year" />
                                    <FrequencyRadio name="paymentFrequency" type="radio" value="12" label="year" />
                                </RadioGroup>
                            </StyledInputWrapper>
                        </FormContainer>
                    </div>
                </StyledForm>
            )}
        </Formik>
    );
};
