import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setIsChangingMovie, setCurrentMovie, emptyMovie } from '../../store/reducers/movieReducer';
import { RootState } from '../../types/redux';
import getPosterFromMovieTitle from '../../api/posters';

const useMovieCard = () => {
  const [moviePoster, setMoviePoster] = useState<string>('');
  const [movieBackdrop, setMovieBackdrop] = useState<string>('');
  const dispatch = useDispatch();
  const isChangingMovie = useSelector((state: RootState) => state.movieReducer.isChangingMovie);

  function handleClose(){
    dispatch(setCurrentMovie(emptyMovie));  
  }
  async function getPosters(movieTitle: string) {
    const rawPoster = await getPosterFromMovieTitle(movieTitle);
    const poster = `https://image.tmdb.org/t/p/w130_and_h195_bestv2${rawPoster.results[0].poster_path}`;
    const backdrop = `https://image.tmdb.org/t/p/w130_and_h195_bestv2${rawPoster.results[0].backdrop_path}`;
    setMoviePoster(poster);
    setMovieBackdrop(backdrop);
    dispatch(setIsChangingMovie(false));   
  }
  return { getPosters, moviePoster, isChangingMovie, handleClose, movieBackdrop };
};
export default useMovieCard;
