import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  setCurrentMovie,
  setIsChangingMovie,
} from '../../store/reducers/movieReducer';
import { RootState } from '../../types/redux';
import { Movie } from '../../types/movie';

const useHistory = () => {
    const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const viewHistory = useSelector((state: RootState) => state.movieReducer.viewHistory);
  function handleMovieSelection(movie: Movie) {
    dispatch(setCurrentMovie(movie));
    dispatch(setIsChangingMovie(true));
  }
  return {
    isOpen,
    setIsOpen,
    viewHistory,
    handleMovieSelection
  };
};
export default useHistory;
