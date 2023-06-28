import axios from './axiosInstance';
import { Movie } from '../types/movie';
import getAuth from './auth';

const getMovies = async (query: string, sortBy: string): Promise<Movie[]> => {
  try {
    const token = await getAuth();

    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };

    const {data}  = await axios.get<Movie[]>(`/movies?query=${query}&sortBy=${sortBy}`, config);

    return data;

  } catch (error) {
    throw new Error('error');
  }
};

export default getMovies;
