import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import Avatar from '@mui/material/Avatar';
import Skeleton from '@mui/material/Skeleton';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import ClickAwayListener from '@mui/base/ClickAwayListener';
import Backdrop from '@mui/material/Backdrop';
import useMovieCard from './useMovieCard';
import { Movie } from '../../types/movie';
import './MovieCard.css';

interface IMovieCardProps {
  movie: Movie;
}
export default function MovieCard({ movie }: IMovieCardProps) {
  const { getPosters, moviePoster, movieBackdrop, isChangingMovie, handleClose } = useMovieCard();
  getPosters(movie.Title);
  return (
    <ClickAwayListener onClickAway={handleClose}>
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={movie.id !== 0}
        onClick={handleClose}
      >
        <div className='cardContainer'>
          <Card
            sx={{
              p: 1,
              paddingBottom: '20px',
              mt: '15px',
              position: 'fixed',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
            }}
          >
            <CardHeader
              avatar={
                <Avatar
                  onClick={handleClose}
                  sx={{ bgcolor: '#36454F', cursor: 'pointer' }}
                  aria-label='close'
                >
                  X
                </Avatar>
              }
              title={<h2>{movie.Title}</h2>}
            />
            <Grid container>
              <Grid item xs={6}>
                {isChangingMovie && !moviePoster && !movieBackdrop && (
                  <>
                    <Skeleton
                      sx={{ bgcolor: 'grey.500' }}
                      variant='rectangular'
                      animation='wave'
                      width={130}
                      height={195}
                    />
                    <br />
                    <Skeleton
                      sx={{ bgcolor: 'grey.500' }}
                      variant='rectangular'
                      animation='wave'
                      width={130}
                      height={195}
                    />
                  </>
                )}
                {!isChangingMovie && moviePoster && movieBackdrop && (
                  <>
                    <img src={moviePoster} width={130} height={195} alt={movie.Title} />
                    <img src={movieBackdrop} width={130} height={195} alt={movie.Title} />
                  </>
                )}
              </Grid>
              <Grid item xs={6}>
                <div className='movieDetails'>
                  <Divider component="div" sx={{color:"black", fontWeight:"bold"}}>GENERAL</Divider>
                  <b>Major Genre :</b> {movie['Major Genre']}<br/>
                  <b>Release Date :</b> {movie['Release Date']}<br/>
                  <b>Distributor :</b> {movie.Distributor}<br/>
                  <b>Director :</b> {movie.Director}<br/>
                  <Divider component="div" sx={{color:"black", fontWeight:"bold", mt:2}}>RATINGS</Divider>
                  <b>IMDB Rating :</b> {movie['IMDB Rating']}<br/>
                  <b>IMDB Votes :</b> {movie['IMDB Votes']}<br/>
                  <b>Rotten Tomatoes Rating :</b> {movie['Rotten Tomatoes Rating']}<br/>
                  <Divider component="div" sx={{color:"black", fontWeight:"bold", mt:2}}>FINANCIAL</Divider>
                  <b>US Gross :</b> {movie['US Gross']}$<br/>
                  <b>US DVD Sales :</b> {movie['US DVD Sales']}<br/>
                  <b>Worldwide Gross :</b> {movie['Worldwide Gross']}$<br/>
                  <b>Production Budget :</b> {movie['Production Budget']}$<br/>
                </div>
              </Grid>
            </Grid>
          </Card>
        </div>
      </Backdrop>
    </ClickAwayListener>
  );
}
