import axios from 'axios';
import {useCallback, useState} from 'react';
import {DEFAULT_BASKET_RESULTS, riskBasket} from '../helpers/constants';
import {BasketFormValues, FinalResults} from '../helpers/types';
import {useParams} from 'react-router';

export const useBasket = () => {
    const [isError, setIsError] = useState<boolean>(false);
    const [basketResults, setBasketResults] = useState<FinalResults>(DEFAULT_BASKET_RESULTS);
    const {id} = useParams();

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
                    const response = await axios.get(`/api/basket/${id}`, newValues);
                    setBasketResults(response.data);
                } else {
                    const response = await axios.post(`/api/basket`, newValues);
                    setBasketResults(response.data);
                }
            } catch {
                setIsError(true);
            }
        },
        [id],
    );

    return {
        isError,
        basketResults,
        fetchBasketResults,
    };
};
