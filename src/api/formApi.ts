import {axios} from './rest/axios';
import {FormValues} from '../helpers/types';

export const getFormResult = (values: FormValues) => {
    return axios.get(`/calculator`, {params: values});
};
