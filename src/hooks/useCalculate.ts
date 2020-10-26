import {useState} from 'react';

export const useCalculate = () => {
    const [namedCurrency, setNamedCurrency] = useState('£');
    const [calculatedTotal, setCalculatedTotal] = useState(0);

    const calculateResults = (basketValue: number, currency: string) => {
        const calculatedStocks = Math.round((basketValue * 0.15 + basketValue) * 1.07);
        const calculatedBonds = Math.round((basketValue * 0.15 + basketValue) * 1.05);
        const calculatedCash = Math.round((basketValue * 0.15 + basketValue) * 1.02);

        setCalculatedTotal(basketValue + calculatedStocks + calculatedCash + calculatedBonds);

        switch (currency) {
            case 'USD':
                setNamedCurrency('$');
                break;
            case 'GBP':
                setNamedCurrency('£');
                break;
            case 'EUR':
                setNamedCurrency('€');
                break;
        }
    };

    return {namedCurrency, calculateResults, calculatedTotal};
};
