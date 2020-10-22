import {Button, MenuItem, Select} from '@material-ui/core';
import Slider from '@material-ui/core/Slider';
import {Field, Formik} from 'formik';
import React from 'react';
import {NumberFormatValues} from 'react-number-format';
// variables imports
import {currencyBasket, INITIAL_BASKET_FORM_VALUES, MARKSBASKET} from '../../helpers/constants';
import {BasketFormValues} from '../../helpers/types';
import {Assumption} from './Assumptiom/Assumption';
import {validationSchema} from './Baket.helpers';
import {
    CurrencyContainer,
    ErrorMessage,
    FormContainer,
    InputContainer,
    StyledBasketForm,
    StyledContainer,
    StyledHeader,
    StyledInput,
    StyledMain,
    StyledSlider,
} from './Basket.styled';
import {BasketResults} from './BasketResults/BasketResults';
import {PieChartComponent} from './PieChart/PieChart';
import {RiskDetails} from './RiskComponent/RiskComponent';

export const BasketComponent: React.FC = () => {
    return (
        <Formik
            initialValues={INITIAL_BASKET_FORM_VALUES}
            validationSchema={validationSchema}
            onSubmit={async (values: BasketFormValues) => {
                console.log(values);
            }}
        >
            {({values, errors, setFieldValue, isValid, isSubmitting}) => (
                <StyledBasketForm>
                    <StyledHeader>
                        <BasketResults />
                        {/* <pre>{JSON.stringify(values, null, 2)}</pre> */}
                        <StyledContainer>
                            <InputContainer>
                                <h2>Invest Value</h2>
                                <StyledInput
                                    name="basketValue"
                                    value={values.basketValue}
                                    thousandSeparator={true}
                                    onValueChange={(val: NumberFormatValues) => setFieldValue('basketValue', val.floatValue)}
                                />
                                <CurrencyContainer>
                                    <Field name="currencyBasketValue" type="select" as={Select}>
                                        <MenuItem value={currencyBasket.DOLLAR}>USD</MenuItem>
                                        <MenuItem value={currencyBasket.BRITISH_POUND}>GBP</MenuItem>
                                        <MenuItem value={currencyBasket.EURO}>EUR</MenuItem>
                                    </Field>
                                </CurrencyContainer>
                            </InputContainer>
                            {isValid ? (
                                <Button variant="contained" type="submit" color="primary" disabled={isSubmitting}>
                                    {isSubmitting ? 'Loading...' : 'Submit'}
                                </Button>
                            ) : (
                                <ErrorMessage>{errors.basketValue}</ErrorMessage>
                            )}
                        </StyledContainer>
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
                    <Assumption />
                </StyledBasketForm>
            )}
        </Formik>
    );
};
