import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://amazon-clone-stripe-api.herokuapp.com',
});

export default instance;
