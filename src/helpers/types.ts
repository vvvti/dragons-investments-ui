export interface FormValues {
    initialValue: number;
    monthlySaving: number;
    savingPeriod: number;
    annualProfit: number;
    paymentFrequency: string;
    currencyValue: string;
}

export interface BasketFormValues {
    basketValue: number;
    riskValue: number;
    currencyBasketValue: string;
}

export interface ResultsValue {
    depositValue?: number;
    estimatedProfit?: number;
    finalValue?: number;
}

export interface Currencies {
    EURO: string;
    BRITISH_POUND: string;
    DOLLAR: string;
}
