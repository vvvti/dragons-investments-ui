import axios from 'axios';
import {Values} from '../components/Form/Form.types';

export const getData = async () => {
    try {
        const response = await axios.get(`/`);
        console.log(response.data);
    } catch (error) {
        console.error(error);
    }
};

export const postData = async (values: Values) => {
    try {
        await axios.get(`/`, {params: {values}});
        console.log(values);
    } catch (error) {
        console.error(error);
    }
};
