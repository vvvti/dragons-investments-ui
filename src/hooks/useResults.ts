import axios from 'axios';
import {useCallback, useState} from 'react';
import {ResultsValue, Values} from '../components/Form/Form.types';

// export const postData = async (values: Values) => {
//     try {
//         const response = await axios.get(`/api/calculator`, {params: values});
//         return(response.data)
//     } catch (error) {
//         console.error(error);
//     }

// };

export const useResults = () => {
    const [isFetching, setIsFetching] = useState<boolean>(false);
    const [isError, setIsError] = useState<boolean>(false);
    const [results, setResults] = useState<ResultsValue>();

    const fetchResults = useCallback(async (values: Values) => {
        setIsFetching(true);
        try {
            const response = await axios.get(`/api/calculator`, {params: values});
            setResults(response.data);
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
