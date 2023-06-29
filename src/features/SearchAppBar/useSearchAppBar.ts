import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { setCuratedMovieList, setIsEmptySearch } from '../../store/reducers/movieReducer';
import getMovies from '../../api/movies';
import useInterval from '../../hooks/useInterval';

const useSearchAppBar = () => {
  const dispatch = useDispatch();
  const [typing, setTyping] = useState<string>('');
  const [oldTyping, setOldTyping] = useState<string>();
  const [sortBy, setSortBy] = useState<string>('');

  useInterval(() => {
    if (typing !== '' && typing !== oldTyping) {
      setOldTyping(typing);
      handleSearchMovie(typing, sortBy);
    }
    if (typing === '') {
      setTyping('');
      setOldTyping('');
    }
  }, 2000);

  async function handleSearchMovie(query: string, sortBy: string) {
    const ListMovies = await getMovies(query, sortBy);
    if (ListMovies?.length === 0) {
      dispatch(setIsEmptySearch(true));
    } else {
      dispatch(setIsEmptySearch(false));
    }
    dispatch(setCuratedMovieList(ListMovies));
  }
  return { setTyping, setSortBy };
};

export default useSearchAppBar;
