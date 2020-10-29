import {axios} from './rest/axios';
import {BasketFormValues} from '../helpers/types';

export const getBasketResults = (id: string) => {
    return axios.get(`/api/basket/${id}`);
};

export const postBasketResults = (newValues: BasketFormValues) => {
    return axios.post(`/api/basket`, newValues);
};

export const putBasketResults = (id: string, newValues: any) => {
    return axios.put(`/api/basket/${id}`, newValues);
};
