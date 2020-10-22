import {Button, MenuItem, Select} from '@material-ui/core';
import Slider from '@material-ui/core/Slider';
import {createMuiTheme, MuiThemeProvider} from '@material-ui/core/styles';
import {Field, Formik} from 'formik';
import React from 'react';
// variables imports
import {currencyBasket, INITIAL_FORM_VALUES, MARKSDURATION, MARKSINITIAL, MARKSMONTHLY, MARKSPROFIT} from '../../helpers/constants';
import {FormValues} from '../../helpers/types';
import {useResults} from '../../hooks/useResults';
import {colors} from '../../styles/theme';
import {FieldElement} from '../FieldElement/FieldElement';
import {Results} from '../Results/Results';
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
import {FrequencyRadio} from './Radio/FrequencyRadio';

const theme = createMuiTheme({
    palette: {
        primary: {main: colors.hltechBlue},
        secondary: {main: colors.sliderBlue},
    },
});

export const FormComponent: React.FC = () => {
    const {fetchResults, results} = useResults();
    return (
        <Formik
            initialValues={INITIAL_FORM_VALUES}
            validationSchema={validationSchema}
            onSubmit={async (values: FormValues) => {
                fetchResults(values);
            }}
        >
            {({values, setFieldValue, errors, isSubmitting, isValid}) => (
                <StyledForm>
                    <StyledResults>
                        {/* <pre>{JSON.stringify(values, null, 2)}</pre> */}
                        <Results {...results} />
                        <Button variant="contained" type="submit" color="primary" disabled={!isValid || isSubmitting}>
                            {isSubmitting ? 'Loading...' : 'Submit'}
                        </Button>
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
                            <h2>How much do you want to pay systematically?</h2>
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
                            <h2>Payment frequency:</h2>
                            <StyledInputWrapper>
                                <RadioGroup>
                                    <MuiThemeProvider theme={theme}>
                                        <FrequencyRadio name="paymentFrequency" type="radio" value="12" label="month" />
                                        <FrequencyRadio name="paymentFrequency" type="radio" value="4" label="quarter" />
                                        <FrequencyRadio name="paymentFrequency" type="radio" value="2" label="half-year" />
                                        <FrequencyRadio name="paymentFrequency" type="radio" value="1" label="year" />
                                    </MuiThemeProvider>
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
                                        step={0.1}
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
                                <MenuItem value={currencyBasket.DOLLAR}>USD</MenuItem>
                                <MenuItem value={currencyBasket.BRITISH_POUND}>GBP</MenuItem>
                                <MenuItem value={currencyBasket.EURO}>EUR</MenuItem>
                            </Field>
                        </CurrencyContainer>
                    </div>
                </StyledForm>
            )}
        </Formik>
    );
};
