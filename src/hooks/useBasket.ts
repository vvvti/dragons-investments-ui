import {useCallback, useState} from 'react';
import {DEFAULT_BASKET_RESULTS, riskBasket} from '../helpers/constants';
import {BasketFormValues, FinalResults} from '../helpers/types';
import {useHistory, useParams} from 'react-router';
import {getBasketResults, postBasketResults} from '../api/basketApi';

export const useBasket = () => {
    const [isError, setIsError] = useState<boolean>(false);
    const [basketResults, setBasketResults] = useState<FinalResults>(DEFAULT_BASKET_RESULTS);
    const {id} = useParams();
    const history = useHistory();

    const resetResults = () => {
        setBasketResults(DEFAULT_BASKET_RESULTS);
    };

    const fetchSavedResults = useCallback(async id => {
        try {
            const response = await getBasketResults(id);
            setBasketResults(response.data);
        } catch {
            setIsError(true);
        }
    }, []);

    const fetchBasketResults = useCallback(
        async (values: BasketFormValues) => {
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

            try {
                if (id) {
                    const response = await getBasketResults(id);
                    setBasketResults(response.data);
                } else {
                    const response = await postBasketResults(newValues);
                    setBasketResults(response.data);
                    const location = {
                        pathname: `/basket/${response.data.id}`,
                    };
                    history.push(location);
                }
            } catch {
                setIsError(true);
            }
        },
        [history, id],
    );

    return {
        isError,
        basketResults,
        fetchBasketResults,
        resetResults,
        fetchSavedResults,
    };
};
