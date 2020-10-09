export interface Values {
    initialValue: number;
    monthlySaving: number;
    savingPeriod: number;
    annualProfit: number;
}
export interface FormProps {
    onSubmit: (values: Values) => void;
}
