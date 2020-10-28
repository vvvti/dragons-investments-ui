import {axios} from './rest/axios';
import {BasketFormValues} from '../helpers/types';

export const getBasketResults = (id: string, newValues: any) => {
    return axios.get(`/api/basket/${id}`, newValues);
};

export const postBasketResults = (newValues: BasketFormValues) => {
    return axios.post(`/api/basket`, newValues);
};
