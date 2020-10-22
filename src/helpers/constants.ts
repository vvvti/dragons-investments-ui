import {BasketFormValues, Currencies, FormValues, ResultsValue} from './types';

export const currencyBasket: Currencies = {
    EURO: '€',
    BRITISH_POUND: '£',
    DOLLAR: '$',
};

export enum riskBasket {
    VERY_CONSERVATIVE,
    CONSERVATIVE,
    MODERATE,
    AGGRESSIVE,
    VERY_AGGRESIVE,
}

export const INITIAL_FORM_VALUES: FormValues = {
    initialValue: 1000,
    monthlySaving: 300,
    savingPeriod: 6,
    annualProfit: 3,
    paymentFrequency: '1',
    currencyValue: currencyBasket.BRITISH_POUND,
};

export const INITIAL_BASKET_FORM_VALUES: BasketFormValues = {
    basketValue: 1000,
    riskValue: 1,
    currencyBasketValue: currencyBasket.BRITISH_POUND,
};

export const DEFAULT_RESULTS: ResultsValue = {
    depositValue: 0,
    estimatedProfit: 0,
    finalValue: 0,
    chartData: [
        {
            key: 0,
            investmentValue: 0,
            profit: 0,
            deposit: 0,
        },
    ],
};

export const DISCLAIMER = '*The presented results are a simulation taking into account the indicated parameters';

export const MARKSMONTHLY = [
    {
        value: 100,
        label: 100,
    },
    {
        value: 200,
        label: 200,
    },
    {
        value: 300,
        label: 300,
    },
    {
        value: 400,
        label: 400,
    },
    {
        value: 500,
        label: 500,
    },
];

export const MARKSDURATION = [
    {
        value: 2,
        label: '2Y',
    },
    {
        value: 4,
        label: '4Y',
    },
    {
        value: 6,
        label: '6Y',
    },
    {
        value: 8,
        label: '8Y',
    },
    {
        value: 10,
        label: '10Y',
    },
];

export const MARKSINITIAL = [
    {
        value: 500,
        label: 500,
    },
    {
        value: 1000,
        label: 1000,
    },
    {
        value: 1500,
        label: 1500,
    },
    {
        value: 2000,
        label: 2000,
    },
];

export const MARKSPROFIT = [
    {
        value: 1,
        label: '1%',
    },
    {
        value: 3,
        label: '3%',
    },
    {
        value: 5,
        label: '5%',
    },
    {
        value: 7,
        label: '7%',
    },
    {
        value: 9,
        label: '9%',
    },
];

export const MARKSBASKET = [
    {
        value: 0,
        label: 'Very Conservative',
    },
    {
        value: 1,
        label: 'Conservative',
    },
    {
        value: 2,
        label: 'Moderate',
    },
    {
        value: 3,
        label: 'Aggresive',
    },
    {
        value: 4,
        label: 'Very Aggresive',
    },
];
