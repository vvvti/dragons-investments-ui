import {MenuItem, Select} from '@material-ui/core';
import Slider from '@material-ui/core/Slider';
import {Field, Formik} from 'formik';
import React from 'react';
// variables imports
import {currencyBasket, INITIAL_FORM_VALUES, MARKSDURATION, MARKSINITIAL, MARKSMONTHLY, MARKSPROFIT} from '../../helpers/constants';
import {FormValues} from '../../helpers/types';
import {Results} from '../Results/Results';
import {validationSchema} from './Baket.helpers';
import {
    CurrencyContainer,
    CurrencyTitle,
    ErrorMessage,
    FormContainer,
    StyledForm,
    StyledInputWrapper,
    StyledResults,
    StyledSlider,
} from './Basket.styled';
import {FieldElement} from '../FieldElement/FieldElement';

export const BasketComponent: React.FC = () => {
    return (
        <Formik
            initialValues={INITIAL_FORM_VALUES}
            validationSchema={validationSchema}
            onSubmit={async (values: FormValues) => {
                console.log(values);
            }}
        >
            {({values, setFieldValue, errors, isValid}) => (
                <StyledForm>
                    <StyledResults>
                        <Results isValid={isValid} />
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
