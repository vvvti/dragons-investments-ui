import {MenuItem, Select} from '@material-ui/core';
import Slider from '@material-ui/core/Slider';
import {Field, Formik} from 'formik';
import React from 'react';
// variables imports
import {INITIAL_FORM_VALUES, MARKSDURATION, MARKSINITIAL, MARKSMONTHLY, MARKSPROFIT} from '../../helpers/constants';
import {Results} from '../Results/Results';
import {FieldElement} from './FieldElement/FieldElement';
import {validationSchema} from './Form.helpers';
import {
    CurrencyContainer,
    CurrencyTitle,
    ErrorMessage,
    FormContainer,
    RadioGroup,
    StyledForm,
    StyledInputWrapper,
    StyledResults,
    StyledSlider,
} from './Form.styled';
import {Values} from './Form.types';
import {FrequencyRadio} from './Radio/FrequencyRadio';

export const FormComponent: React.FC = () => {
    return (
        <Formik
            initialValues={INITIAL_FORM_VALUES}
            validationSchema={validationSchema}
            onSubmit={async (values: Values) => {
                console.log(values);
            }}
        >
            {({values, setFieldValue, errors}) => (
                <StyledForm>
                    <StyledResults>
                        <Results />
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
                                        step={500}
                                        valueLabelDisplay="auto"
                                        marks={MARKSINITIAL}
                                        value={values.initialValue}
                                        onChange={(event, value) => setFieldValue('initialValue', value)}
                                    />
                                </StyledSlider>
                                <Field
                                    name="initialValue"
                                    value={values.initialValue}
                                    component={FieldElement}
                                    unit={values.currencyValue}
                                />
                                <ErrorMessage>{errors.initialValue}</ErrorMessage>
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
                                        step={100}
                                        valueLabelDisplay="auto"
                                        marks={MARKSMONTHLY}
                                        value={values.monthlySaving}
                                        onChange={(event, value) => setFieldValue('monthlySaving', value)}
                                    />
                                </StyledSlider>
                                <Field
                                    name="monthlySaving"
                                    value={values.monthlySaving}
                                    component={FieldElement}
                                    unit={values.currencyValue}
                                />
                                <ErrorMessage>{errors.monthlySaving}</ErrorMessage>
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
                                <ErrorMessage>{errors.savingPeriod}</ErrorMessage>
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
                                <ErrorMessage>{errors.annualProfit}</ErrorMessage>
                            </StyledInputWrapper>
                        </FormContainer>
                        <CurrencyContainer>
                            <CurrencyTitle>Currency:</CurrencyTitle>
                            <Field name="currencyValue" type="select" as={Select}>
                                <MenuItem value="$">USD</MenuItem>
                                <MenuItem value="£">GBP</MenuItem>
                                <MenuItem value="€">EUR</MenuItem>
                            </Field>
                        </CurrencyContainer>
                    </div>
                </StyledForm>
            )}
        </Formik>
    );
};
