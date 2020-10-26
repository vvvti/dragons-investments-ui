import axios from 'axios';
import {useCallback, useState} from 'react';
import {DEFAULT_BASKET_RESULTS, riskBasket} from '../helpers/constants';
import {BasketFormValues, FinalResults} from '../helpers/types';

export const useBasket = () => {
    const [isError, setIsError] = useState<boolean>(false);
    const [basketResults, setBasketResults] = useState<FinalResults>(DEFAULT_BASKET_RESULTS);

    const fetchBasketResults = useCallback(async (values: BasketFormValues) => {
        let newValues: any = {...values};
        switch (values.riskType) {
            case riskBasket.VERY_AGGRESSIVE:
                newValues.riskType = 'VERY_AGGRESSIVE';
                break;
            case riskBasket.AGGRESSIVE:
                newValues.riskType = 'AGGRESSIVE';
                break;
            case riskBasket.MODERATE:
                newValues.riskType = 'MODERATE';
                break;
            case riskBasket.CONSERVATIVE:
                newValues.riskType = 'CONSERVATIVE';
                break;
            case riskBasket.VERY_CONSERVATIVE:
                newValues.riskType = 'VERY_CONSERVATIVE';
                break;
        }
        console.log('Values to API:', newValues);
        try {
            console.log('Now to API:', newValues);
            const response = await axios.post(`/api/basket`, newValues);
            console.log('Values from API:', response.data);
            setBasketResults(response.data);
        } catch {
            setIsError(true);
        }
    }, []);

    return {
        isError,
        basketResults,
        fetchBasketResults,
    };
};
