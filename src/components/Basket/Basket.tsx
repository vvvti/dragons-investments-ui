import {MenuItem, Select} from '@material-ui/core';
import Slider from '@material-ui/core/Slider';
import {Field, Formik} from 'formik';
import React from 'react';
// variables imports
import {currencyBasket, INITIAL_FORM_VALUES, MARKSBASKET} from '../../helpers/constants';
import {FormValues} from '../../helpers/types';
import {validationSchema} from './Baket.helpers';
import {
    CurrencyContainer,
    ErrorMessage,
    FormContainer,
    InputContainer,
    StyledBasketForm,
    StyledHeader,
    StyledMain,
    StyledMainResult,
    StyledSlider,
} from './Basket.styled';
import {BasketFieldElement} from './BasketFieldElement/BasketFieldElement';
import {PieChartComponent} from './PieChart/PieChart';
import {RiskDetails} from './RiskComponent/RiskComponent';

export const BasketComponent: React.FC = () => {
    return (
        <Formik
            initialValues={INITIAL_FORM_VALUES}
            validationSchema={validationSchema}
            onSubmit={async (values: FormValues) => {
                console.log(values);
            }}
        >
            {({values, setFieldValue, errors}) => (
                <StyledBasketForm>
                    <StyledHeader>
                        <div>
                            <StyledMainResult
                                value={values.basketValue}
                                displayType={'text'}
                                thousandSeparator={true}
                                prefix={values.currencyValue}
                            />
                            <h2>Value of the investment</h2>
                        </div>
                        <InputContainer>
                            <h2>Invest Value</h2>
                            <Field name="basketValue" value={values.basketValue} component={BasketFieldElement} />
                            <ErrorMessage>{errors.initialValue}</ErrorMessage>
                            <CurrencyContainer>
                                <Field name="currencyValue" type="select" as={Select}>
                                    <MenuItem value={currencyBasket.DOLLAR}>USD</MenuItem>
                                    <MenuItem value={currencyBasket.BRITISH_POUND}>GBP</MenuItem>
                                    <MenuItem value={currencyBasket.EURO}>EUR</MenuItem>
                                </Field>
                            </CurrencyContainer>
                        </InputContainer>
                    </StyledHeader>
                    <div>
                        <StyledMain>
                            <PieChartComponent />
                            <FormContainer>
                                <h2>What is you risk capacity?</h2>
                                <StyledSlider>
                                    <Slider
                                        name="slider"
                                        min={0}
                                        max={4}
                                        step={1}
                                        marks={MARKSBASKET}
                                        value={values.riskValue}
                                        onChange={(event, value) => setFieldValue('riskValue', value)}
                                    />
                                </StyledSlider>
                                <RiskDetails riskValue={values.riskValue} />
                            </FormContainer>
                        </StyledMain>
                    </div>
                </StyledBasketForm>
            )}
        </Formik>
    );
};
