import axios from 'axios';
import {Values} from '../components/Form/Form.types';

export const postData = async (values: Values) => {
    console.log(values);
    try {
        const response = await axios.get(`/api/calculator`, {params: values});
        console.log(response.data);
    } catch (error) {
        console.error(error);
    }
};
