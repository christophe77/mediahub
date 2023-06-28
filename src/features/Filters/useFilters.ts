import { useDispatch, useSelector } from 'react-redux';
import { setOrderBy } from '../../store/reducers/movieReducer';
import { RootState } from '../../types/redux';
import { OrderBy } from '../../types/movie';

const useFilters = () => {
  const dispatch = useDispatch();
  const orderBy = useSelector((state: RootState) => state.movieReducer.orderBy);
  const movieCount = useSelector((state: RootState) => state.movieReducer.curatedMovieList.length);

  function handleChangeOrderBy(newWorldOrder: OrderBy) {
    dispatch(setOrderBy(newWorldOrder));
  }

  return {
    orderBy,
    handleChangeOrderBy,
    movieCount,
  };
};
export default useFilters;
