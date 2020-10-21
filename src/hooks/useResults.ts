import axios from 'axios';
import {useCallback, useState} from 'react';
import {FormValues, ResultsValue} from '../helpers/types';

export const useResults = () => {
    const [isFetching, setIsFetching] = useState<boolean>(false);
    const [isError, setIsError] = useState<boolean>(false);
    const [results, setResults] = useState<ResultsValue>({
        depositValue: 1,
        estimatedProfit: 1,
        finalValue: 1,
        chartData: [
            {
                key: 1,
                investmentValue: 1,
                profit: 1,
                deposit: 1,
            },
        ],
    });

    const fetchResults = useCallback(async (values: FormValues) => {
        setIsFetching(true);
        try {
            const response = await axios.get(`/api/calculator`, {params: values});
            if (response.data) {
                setResults(response.data);
            }
        } catch {
            setIsError(true);
        } finally {
            setIsFetching(false);
        }
    }, []);

    return {
        isFetching,
        isError,
        results,
        fetchResults,
    };
};
