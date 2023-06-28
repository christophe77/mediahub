import { combineReducers } from '@reduxjs/toolkit';
import movieReducer from './reducers/movieReducer';

const rootReducer = combineReducers({
  movieReducer,
});

export default rootReducer;
