import axios from 'axios';
import {Values} from '../Form/Form.types';

export const getData = async () => {
    try {
        const response = await axios.get(`/calculator`);
        console.log(response);
    } catch (error) {
        console.error(error);
    }
};

export const postData = async (values: Values) => {
    try {
        const response = await axios.post(`/calculator`, {values});
        console.log(response);
    } catch (error) {
        console.error(error);
    }
};
