import Axios from 'axios';

export const axios = Axios.create({baseURL: `${document.documentURI}/api`});
