import axios from 'axios';


const instance = axios.create({
    baseURL: 'https://burger-builder-react-fbd35.firebaseio.com/',
});

export default instance;
