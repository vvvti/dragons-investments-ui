import {Button} from '@material-ui/core';
import axios from 'axios';
import {Field, Formik} from 'formik';
import React from 'react';

// variables imports
import {CURRENCY} from '../../helpers/constants';
import {getData} from '../api/calculateValues';
import {Chart} from '../Chart/Chart';
import {Results} from '../Results/Results';
import {FieldElement} from './FieldElement/FieldElement';
import {FormContainer, RadioGroup, StyledForm, StyledInputWrapper, StyledResults} from './Form.styled';
import {Values} from './Form.types';
// components import
import {FrequencyRadio} from './Radio/FrequencyRadio';
import {DurationSlider} from './Slider/DurationSlider';
import {InitialSlider} from './Slider/InitialSlider';
import {MonthlySlider} from './Slider/MonthlySlider';
import {RateSlider} from './Slider/RateSlider';

export const FormComponent: React.FC = () => {
    return (
        <Formik
            initialValues={{initialValue: 1000, monthlySaving: 100, savingPeriod: 2, annualProfit: 7, paymentFrequency: 1}}
            onSubmit={async (values: Values) => {
                try {
                    await axios.post(`/calculator`, {values});
                } catch (error) {
                    console.error(error);
                }
            }}
        >
            {({values}) => (
                <StyledForm>
                    <StyledResults>
                        <Results />
                        <Chart />
                        <Button variant="contained" type="submit" color="primary">
                            Submit
                        </Button>
                        <Button onClick={getData}>Get</Button>
                    </StyledResults>
                    <div>
                        <FormContainer>
                            <h2>How much do you have currently saved?</h2>
                            <StyledInputWrapper>
                                <InitialSlider />
                                <Field name="initialValue" value={values.initialValue} component={FieldElement} unit={CURRENCY} />
                            </StyledInputWrapper>
                        </FormContainer>
                        <FormContainer>
                            <h2>How much do you want to save monthly?</h2>
                            <StyledInputWrapper>
                                <MonthlySlider />
                                <Field name="monthlySaving" value={values.monthlySaving} component={FieldElement} unit={CURRENCY} />
                            </StyledInputWrapper>
                        </FormContainer>
                        <FormContainer>
                            <h2>How long do you plan to invest?</h2>
                            <StyledInputWrapper>
                                <DurationSlider />
                                <Field name="savingPeriod" value={values.savingPeriod} component={FieldElement} unit="Years" />
                            </StyledInputWrapper>
                        </FormContainer>
                        <FormContainer>
                            <h2>What is your expected annual profit?</h2>
                            <StyledInputWrapper>
                                <RateSlider />
                                <Field name="annualProfit" value={values.annualProfit} component={FieldElement} unit="%" />
                            </StyledInputWrapper>
                        </FormContainer>
                        <FormContainer>
                            <h2>Frequency Payment:</h2>
                            <StyledInputWrapper>
                                <RadioGroup>
                                    <FrequencyRadio name="paymentFrequency" type="radio" value="1" label="month" />
                                    <FrequencyRadio name="paymentFrequency" type="radio" value="3" label="quarter" />
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
