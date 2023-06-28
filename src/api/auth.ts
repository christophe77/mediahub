import axios from './axiosInstance';

const getAuth = async () => {
  try {
    const response = await axios.post('/auth/login', {
      username: 'Canal-plus',
      password: 'Super-secret',
    });
    return response.data.token;
  } catch (error) {
    console.log(error);
    throw new Error('error');
  }
};

export default getAuth;
