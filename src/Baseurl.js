import axios from 'axios';


const instance = axios.create({
// baseURL: 'http://al-zukhruf.com/room/'
// baseURL: 'http://192.168.8.106'
baseURL: 'http://192.168.1.109'
});

export default instance;