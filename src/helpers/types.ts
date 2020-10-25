export interface FormValues {
    initialValue: number;
    monthlySaving: number;
    savingPeriod: number;
    annualProfit: number;
    paymentFrequency: string;
    currencyValue: string;
}

export interface BasketFormValues {
    id: string;
    basketValue: number;
    riskValue: number;
    currency: string;
}

interface ArrayResults {
    key?: number;
    investmentValue?: number;
    profit?: number;
    deposit?: number;
}
export interface ResultsValue {
    depositValue?: number;
    estimatedProfit?: number;
    finalValue?: number;
    chartData?: Array<ArrayResults>;
}
interface chartTypes {
    name: string;
    value: number;
}

export interface RiskProps {
    riskValue: number;
}

interface detailsTypes {
    name: string;
    bonds: chartTypes;
    stocks: chartTypes;
    cash: chartTypes;
}

export interface basketTypes {
    veryConservative: detailsTypes;
    conservative: detailsTypes;
    moderate: detailsTypes;
    aggressive: detailsTypes;
    veryAggressive: detailsTypes;
}

export interface Currencies {
    EURO: string;
    BRITISH_POUND: string;
    DOLLAR: string;
}

export interface FinalResults {
    id?: string;
    riskType?: string;
    basketValue?: number;
    totalAmount?: number;
    profit?: {
        stock?: number;
        bonds?: number;
        cash?: number;
    };
    percentage?: {
        stock?: number;
        bonds?: number;
        cash?: number;
    };
}
