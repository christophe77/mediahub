import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { find } from 'lodash';
import { Movie, OrderBy } from '../../types/movie';

export const emptyMovie = {
  id: 0,
  Title: '',
  'US Gross': 0,
  'US DVD Sales': 0,
  'Worldwide Gross': 0,
  'Production Budget': 0,
  'Release Date': '',
  Distributor: '',
  'IMDB Rating': 0,
  'IMDB Votes': 0,
  'Major Genre': '',
  Director: '',
  'Rotten Tomatoes Rating': '',
};

interface MovieState {
  currentMovie: Movie;
  curatedMovieList: Movie[];
  isChangingMovie: boolean;
  orderBy: OrderBy;
  viewHistory: Movie[];
}

const initialState = {
  currentMovie: emptyMovie,
  curatedMovieList: [],
  isChangingMovie: true,
  orderBy: 'Title',
  viewHistory: [],
} as MovieState;

const movieSlice = createSlice({
  name: 'movie',
  initialState,
  reducers: {
    setIsChangingMovie(state, action: PayloadAction<boolean>) {
      state.isChangingMovie = action.payload;
    },
    setCuratedMovieList(state, action: PayloadAction<Movie[]>) {
      state.curatedMovieList = action.payload;
    },
    setCurrentMovie(state, action: PayloadAction<Movie>) {
      state.currentMovie = action.payload;
    },
    AddMovieToHistory(state, action: PayloadAction<Movie>) {
      const result = find(state.viewHistory, action.payload);
      if (!result) {
        state.viewHistory.push(action.payload);
      }
    },
    setOrderBy(state, action: PayloadAction<OrderBy>) {
      state.orderBy = action.payload;
      const sortedList = state.curatedMovieList.sort(
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        (movie1, movie2) => movie2[action.payload] - movie1[action.payload],
      );
      state.curatedMovieList = sortedList;
    },
  },
});

export const {
  setCurrentMovie,
  setCuratedMovieList,
  setIsChangingMovie,
  setOrderBy,
  AddMovieToHistory,
} = movieSlice.actions;
export default movieSlice.reducer;
