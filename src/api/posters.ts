import axios from 'axios';
import { Poster } from '../types/poster';

const getPosterFromMovieTitle = async (movieTitle: string): Promise<Poster> => {
  try {
    const { data } = await axios.get<Poster>(
      `https://api.themoviedb.org/3/search/movie?api_key=15d2ea6d0dc1d476efbca3eba2b9bbfb&query=${movieTitle}&include_adult=true&language=en-US&page=1`,
    );

    return data;
  } catch (error) {
    throw new Error('error');
  }
};

export default getPosterFromMovieTitle;
