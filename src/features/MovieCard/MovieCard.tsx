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
                  <Divider>GENERAL</Divider>
                  <p><b>Major Genre :</b> {movie['Major Genre']}</p>
                  <p><b>Release Date :</b> {movie['Release Date']}</p>
                  <p><b>Distributor :</b> {movie.Distributor}</p>
                  <p><b>Director :</b> {movie.Director}</p>
                  <Divider>RATINGS</Divider>
                  <p><b>IMDB Rating :</b> {movie['IMDB Rating']}</p>
                  <p><b>IMDB Votes :</b> {movie['IMDB Votes']}</p>
                  <p><b>Rotten Tomatoes Rating :</b> {movie['Rotten Tomatoes Rating']}</p>
                  <Divider>FINANCIAL</Divider>
                  <p><b>US Gross :</b> {movie['US Gross']}$</p>
                  <p><b>US DVD Sales :</b> {movie['US DVD Sales']}</p>
                  <p><b>Worldwide Gross :</b> {movie['Worldwide Gross']}$</p>
                  <p><b>Production Budget :</b> {movie['Production Budget']}$</p>
                </div>
              </Grid>
            </Grid>
          </Card>
        </div>
      </Backdrop>
    </ClickAwayListener>
  );
}
