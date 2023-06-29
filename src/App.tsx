import React from 'react';
import SearchAppBar from './features/SearchAppBar/SearchAppBar';
import './App.css';
import MovieList from './features/MovieList/MovieList';

function App() {
  return (
    <div className='App'>
      <SearchAppBar />
      <MovieList />
    </div>
  );
}

export default App;
