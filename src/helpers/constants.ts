import {BasketFormValues, basketTypes, Currencies, FinalResults, FormValues, ResultsValue} from './types';

export enum CurrencyBasket {
    EURO = 'EUR',
    BRITISH_POUND = 'GBP',
    DOLLAR = 'USD',
}

export const currencyForm: Currencies = {
    EURO: '€',
    BRITISH_POUND: '£',
    DOLLAR: '$',
};

export enum riskBasket {
    VERY_CONSERVATIVE,
    CONSERVATIVE,
    MODERATE,
    AGGRESSIVE,
    VERY_AGGRESSIVE,
}

export const INITIAL_FORM_VALUES: FormValues = {
    initialValue: 1000,
    monthlySaving: 300,
    savingPeriod: 6,
    annualProfit: 3,
    paymentFrequency: '1',
    currencyValue: currencyForm.BRITISH_POUND,
};

export const INITIAL_BASKET_FORM_VALUES: BasketFormValues = {
    id: '',
    basketValue: 1000,
    riskType: 2,
    currency: CurrencyBasket.BRITISH_POUND,
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

export const DEFAULT_BASKET_RESULTS: FinalResults = {
    currency: 'GBP',
    riskType: 'MODERATE',
    basketValue: 0,
    totalAmount: 0,
    profit: {
        stock: 0,
        bonds: 0,
        cash: 0,
    },
    percentage: {
        stock: 30,
        bonds: 10,
        cash: 60,
    },
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
        label: 'Aggressive',
    },
    {
        value: 4,
        label: 'Very Aggressive',
    },
];

export const basketDetails: basketTypes = {
    veryConservative: {
        name: 'Very Conservative',
        stocks: {
            name: 'stocks',
            value: 20,
        },
        bonds: {
            name: 'bonds',
            value: 50,
        },
        cash: {
            name: 'cash',
            value: 30,
        },
    },
    conservative: {
        name: 'Conservative',
        stocks: {
            name: 'stocks',
            value: 45,
        },
        bonds: {
            name: 'bonds',
            value: 40,
        },
        cash: {
            name: 'cash',
            value: 15,
        },
    },
    moderate: {
        name: 'Moderate',
        stocks: {
            name: 'stocks',
            value: 65,
        },
        bonds: {
            name: 'bonds',
            value: 30,
        },
        cash: {
            name: 'cash',
            value: 5,
        },
    },
    aggressive: {
        name: 'Aggressive',
        stocks: {
            name: 'stocks',
            value: 80,
        },
        bonds: {
            name: 'bonds',
            value: 15,
        },
        cash: {
            name: 'cash',
            value: 5,
        },
    },
    veryAggressive: {
        name: 'Aggressive',
        stocks: {
            name: 'stocks',
            value: 90,
        },
        bonds: {
            name: 'bonds',
            value: 5,
        },
        cash: {
            name: 'cash',
            value: 5,
        },
    },
};

export const LENDINGPAGE = 'https://dragons-lending.ersa-team.sit.fintechchallenge.pl/';
