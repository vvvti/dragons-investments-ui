import axios from 'axios';
import {Values} from '../components/Form/Form.types';

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
        const response = await axios.get(`/calculator`, {params: {values}});
        console.log(response);
    } catch (error) {
        console.error(error);
    }
};
