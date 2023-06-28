import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setIsChangingMovie, setCurrentMovie, emptyMovie } from '../../store/reducers/movieReducer';
import { RootState } from '../../types/redux';
import getPosterFromMovieTitle from '../../api/posters';

const useMovieCard = () => {
  const [moviePoster, setMoviePoster] = useState<string>('');
  const dispatch = useDispatch();
  const isChangingMovie = useSelector((state: RootState) => state.movieReducer.isChangingMovie);

  function handleClose(){
    dispatch(setCurrentMovie(emptyMovie));  
  }
  async function getPoster(movieTitle: string) {
    const rawPoster = await getPosterFromMovieTitle(movieTitle);
    const poster = `https://image.tmdb.org/t/p/w130_and_h195_bestv2${rawPoster.results[0].poster_path}`;
    setMoviePoster(poster);
    dispatch(setIsChangingMovie(false));   
  }
  return { getPoster, moviePoster, isChangingMovie, handleClose };
};
export default useMovieCard;
