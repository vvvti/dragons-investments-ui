import {MenuItem, Select} from '@material-ui/core';
import Slider from '@material-ui/core/Slider';
import {Field, Formik} from 'formik';
import React from 'react';
// variables imports
import {currencyBasket, INITIAL_FORM_VALUES, MARKSBASKET} from '../../helpers/constants';
import {FormValues} from '../../helpers/types';
import {FieldElement} from '../FieldElement/FieldElement';
import {Results} from '../Results/Results';
import {validationSchema} from './Baket.helpers';
import {
    CurrencyContainer,
    ErrorMessage,
    FormContainer,
    InputContainer,
    StyledForm,
    StyledInputWrapper,
    StyledResults,
    StyledSlider,
} from './Basket.styled';

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
                        <InputContainer>
                            <Field name="initialValue" value={values.basketValue} component={FieldElement} unit="" />
                            <ErrorMessage>{errors.initialValue}</ErrorMessage>
                            <CurrencyContainer>
                                <Field name="currencyValue" type="select" as={Select}>
                                    <MenuItem value={currencyBasket.DOLLAR}>USD</MenuItem>
                                    <MenuItem value={currencyBasket.BRITISH_POUND}>GBP</MenuItem>
                                    <MenuItem value={currencyBasket.EURO}>EUR</MenuItem>
                                </Field>
                            </CurrencyContainer>
                        </InputContainer>
                        <FormContainer>
                            <h2>What is you risk capacity?</h2>
                            <StyledInputWrapper>
                                <StyledSlider>
                                    <Slider
                                        name="slider"
                                        min={0}
                                        max={4}
                                        step={1}
                                        // valueLabelDisplay="auto"
                                        marks={MARKSBASKET}
                                        value={values.riskValue}
                                        onChange={(event, value) => setFieldValue('riskValue', value)}
                                    />
                                </StyledSlider>
                            </StyledInputWrapper>
                        </FormContainer>
                    </div>
                </StyledForm>
            )}
        </Formik>
    );
};
