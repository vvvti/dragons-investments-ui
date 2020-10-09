import axios from 'axios';

export const getData = async () => {
    try {
        const response = await axios.get(`/calculator`);
        console.log(response.data);
    } catch (error) {
        console.error(error);
    }
};
