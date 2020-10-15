export interface Values {
    initialValue: number;
    monthlySaving: number;
    savingPeriod: number;
    annualProfit: number;
    paymentFrequency: string;
    currencyValue: string;
}

export interface ResultsValue {
    depositValue?: number;
    estimatedProfit?: number;
    finalValue?: number;
}
