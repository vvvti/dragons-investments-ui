import {Button} from '@material-ui/core';
import {Field, Formik} from 'formik';
import React from 'react';
import {getData, postData} from '../../api/calculator';
// variables imports
import {CURRENCY} from '../../helpers/constants';
import {INITIAL_AMOUNT, INITIAL_MONTHLY, INITIAL_PERIOD, INITIAL_ANNUAL, INITIAL_FREQUENCY} from '../../helpers/constants';
// components import
import {Chart} from '../Chart/Chart';
import {Values} from '../Form/Form.types';
import {Results} from '../Results/Results';
import {FieldElement} from './FieldElement/FieldElement';
import {FormContainer, RadioGroup, StyledForm, StyledInputWrapper, StyledResults} from './Form.styled';
import {FrequencyRadio} from './Radio/FrequencyRadio';
import {DurationSlider} from './Slider/DurationSlider';
import {InitialSlider} from './Slider/InitialSlider';
import {MonthlySlider} from './Slider/MonthlySlider';
import {RateSlider} from './Slider/RateSlider';

export const FormComponent: React.FC = () => {
    // implemented to test communication with API
    const sleep = (ms: number) => new Promise(r => setTimeout(r, ms));

    return (
        <Formik
            initialValues={{
                initialValue: INITIAL_AMOUNT,
                monthlySaving: INITIAL_MONTHLY,
                savingPeriod: INITIAL_PERIOD,
                annualProfit: INITIAL_ANNUAL,
                paymentFrequency: INITIAL_FREQUENCY,
            }}
            onSubmit={async (values: Values) => {
                await sleep(5000);
                postData(values);
            }}
        >
            {({values, isSubmitting}) => (
                <StyledForm>
                    <StyledResults>
                        <Results />
                        <Chart />
                        <Button variant="contained" type="submit" color="primary" disabled={isSubmitting}>
                            {isSubmitting ? 'Loading...' : 'Submit'}
                        </Button>
                        <Button onClick={getData}>Get</Button>
                    </StyledResults>
                    <div>
                        <FormContainer>
                            <h2>How much do you have currently saved?</h2>
                            <InitialSlider />
                        </FormContainer>
                        <FormContainer>
                            <h2>How much do you want to save?</h2>
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
