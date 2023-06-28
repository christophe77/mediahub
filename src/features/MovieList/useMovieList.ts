import { useDispatch, useSelector } from 'react-redux';
import {
  setCurrentMovie,
  setIsChangingMovie,
  AddMovieToHistory,
} from '../../store/reducers/movieReducer';
import { RootState } from '../../types/redux';
import { Movie } from '../../types/movie';

const useMovieList = () => {
  const dispatch = useDispatch();
  const currentMovie = useSelector((state: RootState) => state.movieReducer.currentMovie);
  const curatedMovieList = useSelector((state: RootState) => state.movieReducer.curatedMovieList);
  
  function handleMovieSelection(movie: Movie) {
    dispatch(setCurrentMovie(movie));
    dispatch(AddMovieToHistory(movie));
    dispatch(setIsChangingMovie(true));
  }
  return { handleMovieSelection, curatedMovieList, currentMovie };
};
export default useMovieList;
