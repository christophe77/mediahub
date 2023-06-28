import axios from 'axios';
const token = localStorage.getItem('token');
axios.defaults.baseURL = 'http://localhost:3000';
axios.defaults.headers.common = { Authorization: `bearer ${token}` };
export default axios;
