export interface FormValues {
    initialValue: number;
    monthlySaving: number;
    savingPeriod: number;
    annualProfit: number;
    paymentFrequency: string;
    currencyValue: string;
    basketValue: number;
    riskValue: number;
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
