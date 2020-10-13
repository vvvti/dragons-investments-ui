import {Button} from '@material-ui/core';
import Slider from '@material-ui/core/Slider';
import {Field, Formik} from 'formik';
import React from 'react';
import {getData, postData} from '../../api/calculator';
// variables imports
import {
    CURRENCY,
    INITIAL_AMOUNT,
    INITIAL_ANNUAL,
    INITIAL_FREQUENCY,
    INITIAL_MONTHLY,
    INITIAL_PERIOD,
    MARKSDURATION,
    MARKSMONTHLY,
    MARKSINITIAL,
    MARKSPROFIT,
} from '../../helpers/constants';
// components import
import {Chart} from '../Chart/Chart';
import {Values} from '../Form/Form.types';
import {Results} from '../Results/Results';
import {FieldElement} from './FieldElement/FieldElement';
import {FormContainer, RadioGroup, StyledForm, StyledInputWrapper, StyledResults, StyledSlider} from './Form.styled';
import {FrequencyRadio} from './Radio/FrequencyRadio';

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
            {({values, isSubmitting, setFieldValue}) => (
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
                            <StyledInputWrapper>
                                <StyledSlider>
                                    <Slider
                                        name="slider"
                                        min={0}
                                        max={2500}
                                        step={25}
                                        valueLabelDisplay="auto"
                                        marks={MARKSINITIAL}
                                        value={values.initialValue}
                                        onChange={(event, value) => setFieldValue('initialValue', value)}
                                    />
                                </StyledSlider>
                                <Field name="initialValue" value={values.initialValue} component={FieldElement} unit={CURRENCY} />
                            </StyledInputWrapper>
                        </FormContainer>
                        <FormContainer>
                            <h2>How much do you want to save?</h2>
                            <StyledInputWrapper>
                                <StyledSlider>
                                    <Slider
                                        name="slider"
                                        min={0}
                                        max={600}
                                        step={25}
                                        valueLabelDisplay="auto"
                                        marks={MARKSMONTHLY}
                                        value={values.monthlySaving}
                                        onChange={(event, value) => setFieldValue('monthlySaving', value)}
                                    />
                                </StyledSlider>
                                <Field name="monthlySaving" value={values.monthlySaving} component={FieldElement} unit={CURRENCY} />
                            </StyledInputWrapper>
                        </FormContainer>
                        <FormContainer>
                            <h2>How long do you plan to invest?</h2>
                            <StyledInputWrapper>
                                <StyledSlider>
                                    <Slider
                                        name="slider"
                                        min={0}
                                        max={12}
                                        step={1}
                                        valueLabelDisplay="auto"
                                        marks={MARKSDURATION}
                                        value={values.savingPeriod}
                                        onChange={(event, value) => setFieldValue('savingPeriod', value)}
                                    />
                                </StyledSlider>
                                <Field name="savingPeriod" value={values.savingPeriod} component={FieldElement} unit="Years" />
                            </StyledInputWrapper>
                        </FormContainer>
                        <FormContainer>
                            <h2>What is your expected annual profit?</h2>
                            <StyledInputWrapper>
                                <StyledSlider>
                                    <Slider
                                        name="slider"
                                        min={0}
                                        max={10}
                                        step={1}
                                        valueLabelDisplay="auto"
                                        marks={MARKSPROFIT}
                                        value={values.annualProfit}
                                        onChange={(event, value) => setFieldValue('annualProfit', value)}
                                    />
                                </StyledSlider>
                                <Field name="annualProfit" value={values.annualProfit} component={FieldElement} unit="%" />
                            </StyledInputWrapper>
                        </FormContainer>
                        <FormContainer>
                            <h2>Frequency Payment:</h2>
                            <StyledInputWrapper>
                                <RadioGroup>
                                    <FrequencyRadio name="paymentFrequency" type="radio" value="12" label="month" />
                                    <FrequencyRadio name="paymentFrequency" type="radio" value="4" label="quarter" />
                                    <FrequencyRadio name="paymentFrequency" type="radio" value="2" label="half-year" />
                                    <FrequencyRadio name="paymentFrequency" type="radio" value="1" label="year" />
                                </RadioGroup>
                            </StyledInputWrapper>
                        </FormContainer>
                    </div>
                </StyledForm>
            )}
        </Formik>
    );
};
