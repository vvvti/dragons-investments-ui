import {Button, MenuItem, Select} from '@material-ui/core';
import Slider from '@material-ui/core/Slider';
import {Field, Formik} from 'formik';
import React from 'react';
// variables imports
import {currencyBasket, INITIAL_BASKET_FORM_VALUES, MARKSBASKET} from '../../helpers/constants';
import {BasketFormValues} from '../../helpers/types';
import {useBasket} from '../../hooks/useBasket';
import {Assumption} from './Assumptiom/Assumption';
import {validationSchema} from './Baket.helpers';
import {
    ChartWrapper,
    CurrencyContainer,
    ErrorMessage,
    FormContainer,
    InputContainer,
    StyledBasketForm,
    StyledInput,
    StyledLink,
    StyledMain,
    StyledSlider,
    StyledTitle,
    SubmitContainer,
} from './Basket.styled';
import {ChartDetails} from './ChartDetails/ChartDetails';
import {PieChartComponent} from './PieChart/PieChart';
import {RiskDetails} from './RiskComponent/RiskComponent';
import {NumberFormatValues} from 'react-number-format';
import {useHistory, useParams} from 'react-router';
import {CopyButton} from './CopyButton/CopyButton';

export const BasketComponent: React.FC = () => {
    const {basketResults, fetchBasketResults} = useBasket();
    const {id} = useParams();
    const history = useHistory();

    const refreshPage = () => {
        const location = {
            pathname: '/basket',
        };

        history.push(location);
        window.location.reload();
    };

    return (
        <Formik
            initialValues={INITIAL_BASKET_FORM_VALUES}
            validationSchema={validationSchema}
            onSubmit={async (values: BasketFormValues) => {
                await fetchBasketResults(values);
            }}
        >
            {({values, errors, setFieldValue, isSubmitting, isValid}) => (
                <StyledBasketForm>
                    <div>
                        <StyledMain>
                            <ChartWrapper>
                                <PieChartComponent />
                                <ChartDetails {...basketResults} />
                            </ChartWrapper>
                            <FormContainer>
                                <InputContainer>
                                    <StyledTitle>Invest Value</StyledTitle>
                                    <StyledInput
                                        label={'Basket Value'}
                                        name="basketValue"
                                        value={values.basketValue}
                                        thousandSeparator={true}
                                        allowNegative={false}
                                        onValueChange={(val: NumberFormatValues) => setFieldValue('basketValue', val.floatValue)}
                                    />

                                    <CurrencyContainer>
                                        <Field name="currency" type="select" as={Select}>
                                            <MenuItem value={currencyBasket.DOLLAR}>USD</MenuItem>
                                            <MenuItem value={currencyBasket.BRITISH_POUND}>GBP</MenuItem>
                                            <MenuItem value={currencyBasket.EURO}>EUR</MenuItem>
                                        </Field>
                                    </CurrencyContainer>
                                </InputContainer>
                                <ErrorMessage>{errors.basketValue}</ErrorMessage>
                                <h2>What is you risk capacity?</h2>
                                <StyledSlider>
                                    <Slider
                                        name="slider"
                                        min={0}
                                        max={4}
                                        step={1}
                                        marks={MARKSBASKET}
                                        value={values.riskType}
                                        onChange={(event, value) => setFieldValue('riskType', value)}
                                    />
                                </StyledSlider>
                                <RiskDetails riskValue={values.riskType} />
                                <SubmitContainer>
                                    <Button variant="contained" type="submit" color="primary" disabled={!isValid || isSubmitting}>
                                        {id ? 'Get Calculation' : 'Save Calculation'}
                                    </Button>
                                    <StyledLink to="/basket/" onClick={refreshPage}>
                                        <Button variant="contained" type="submit" color="primary">
                                            Reset
                                        </Button>
                                    </StyledLink>
                                </SubmitContainer>
                            </FormContainer>
                            {/*<pre>{JSON.stringify(values, null, 2)}</pre>*/}
                        </StyledMain>
                        <CopyButton {...basketResults} />
                    </div>
                    <Assumption />
                </StyledBasketForm>
            )}
        </Formik>
    );
};
