import React from 'react';
import Menu from './features/SearchAppBar/SearchAppBar';
import './App.css';
import MovieList from './features/MovieList/MovieList';

function App() {
  return (
    <div className='App'>
      <Menu />
      <MovieList />
    </div>
  );
}

export default App;
