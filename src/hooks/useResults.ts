import {useCallback, useState} from 'react';
import {DEFAULT_RESULTS} from '../helpers/constants';
import {FormValues, ResultsValue} from '../helpers/types';
import {getFormResult} from '../api/formApi';

export const useResults = () => {
    const [isFetching, setIsFetching] = useState<boolean>(false);
    const [isError, setIsError] = useState<boolean>(false);
    const [results, setResults] = useState<ResultsValue>(DEFAULT_RESULTS);

    const fetchResults = useCallback(async (values: FormValues) => {
        setIsFetching(true);
        try {
            const response = await getFormResult(values);
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
