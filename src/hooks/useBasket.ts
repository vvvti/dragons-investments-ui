import axios from 'axios';
import {useCallback, useState} from 'react';
import {DEFAULT_BASKET_RESULTS} from '../helpers/constants';
import {BasketFormValues, FinalResults} from '../helpers/types';

export const useBasket = () => {
    const [isFetching, setIsFetching] = useState<boolean>(false);
    const [isError, setIsError] = useState<boolean>(false);
    const [basketResults, setBasketResults] = useState<FinalResults>(DEFAULT_BASKET_RESULTS);

    const fetchBasketResults = useCallback(async (values: BasketFormValues) => {
        setIsFetching(true);
        console.log('Values to API:', values);
        try {
            const response = await axios.post(`/api/basket`, {params: values});
            setBasketResults(response.data);
        } catch {
            setIsError(true);
        } finally {
            setIsFetching(false);
        }
    }, []);

    return {
        isFetching,
        isError,
        basketResults,
        fetchBasketResults,
    };
};
