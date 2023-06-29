import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Grid';
import MovieCard from '../MovieCard/MovieCard';
import useMovieList from './useMovieList';
import ScrollTop from '../ScrollToTop/ScrollToTop';
import OrderBy from '../Filters/Filters';
import SplashLogo from '../SplashLogo/SplashLogo';
import NoResults from '../NoResults/NoResults';
import { Movie } from '../../types/movie';
import './MovieList.css';

export default function SimpleAccordion() {
  const { handleMovieSelection, curatedMovieList, currentMovie, isEmptySearch } = useMovieList();
  return (
    <>
      <ScrollTop />
      {curatedMovieList?.length === 0 && !isEmptySearch && <SplashLogo />}
      {curatedMovieList?.length === 0 && isEmptySearch && <NoResults />}

      <div className={'moviesContainer'}>
        <List sx={{ width: '100%', maxWidth: 900, bgcolor: 'transparent' }}>
          {curatedMovieList?.length > 0 && <OrderBy />}
          {curatedMovieList?.length > 0 &&
            curatedMovieList.map((movie: Movie) => (
              <ListItem className='listItem' key={movie.id}>
                <Grid container spacing={2} key={movie.id}>
                  <Grid item xs={4} sx={{ display: 'flex' }}>
                    <ListItemText primary={movie.Title} secondary={movie['Release Date'] || '-'} />
                  </Grid>
                  <Grid item xs={2} sx={{ display: 'flex' }}>
                    <ListItemText primary={'Genre'} secondary={movie['Major Genre'] || 'Unknown'} />
                  </Grid>
                  <Grid item xs={4} sx={{ display: 'flex' }}>
                    <ListItemAvatar>
                      <div className='voteTitle'>IMDB Votes</div>
                      <div className='voteCount'>{movie['IMDB Votes'] || '-'}</div>
                    </ListItemAvatar>

                    <ListItemAvatar>
                      IMDB
                      <Avatar
                        sx={{ backgroundColor: '#454545', fontSize: 13, height: 35, width: 35 }}
                      >
                        {movie['IMDB Rating'] || '-'}
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemAvatar>
                      Rotten
                      <Avatar
                        sx={{ backgroundColor: '#454545', fontSize: 13, height: 35, width: 35 }}
                      >
                        {movie['Rotten Tomatoes Rating'] || '-'}
                      </Avatar>
                    </ListItemAvatar>
                  </Grid>
                  <Grid
                    item
                    xs={2}
                    sx={{ display: 'flex', cursor:"pointer" }}
                    onClick={() => handleMovieSelection(movie)}
                  >
                    <ListItemText
                      primary={<div className="more">+ Details</div>}
                     
                    />
                  </Grid>
                </Grid>
              </ListItem>
            ))}
        </List>
      </div>

      {currentMovie?.id !== 0 && <MovieCard movie={currentMovie} />}
    </>
  );
}
