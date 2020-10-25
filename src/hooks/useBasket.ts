import axios from 'axios';
import {useCallback, useState} from 'react';
import {DEFAULT_BASKET_RESULTS} from '../helpers/constants';
import {BasketFormValues, FinalResults} from '../helpers/types';

export const useBasket = () => {
    const [isError, setIsError] = useState<boolean>(false);
    const [basketResults, setBasketResults] = useState<FinalResults>(DEFAULT_BASKET_RESULTS);

    const fetchBasketResults = useCallback(async (values: BasketFormValues) => {
        console.log('Values to API:', values);
        try {
            const response = await axios.post(`/api/basket`, {params: values});
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
