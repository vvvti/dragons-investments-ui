import axios from 'axios';
import {useCallback, useState} from 'react';
import {BasketFormValues, ResultsValue} from '../helpers/types';

export const useBasket = () => {
    const [isFetching, setIsFetching] = useState<boolean>(false);
    const [isError, setIsError] = useState<boolean>(false);
    const [basketValues, setBasketValues] = useState<ResultsValue>();

    const fetchResults = useCallback(async (values: BasketFormValues) => {
        setIsFetching(true);
        console.log('Values to API:', values);
        try {
            const response = await axios.post(`/api/basket`, {params: values});
            setBasketValues(response.data);
        } catch {
            setIsError(true);
        } finally {
            setIsFetching(false);
        }
    }, []);

    return {
        isFetching,
        isError,
        basketValues,
        fetchResults,
    };
};
