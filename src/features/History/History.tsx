import * as React from 'react';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import ManageHistoryIcon from '@mui/icons-material/ManageHistory';
import IconButton from '@mui/material/IconButton';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import useHistory from './useHistory';
import './History.css';
import { Movie } from '../../types/movie';

export default function History() {
  const { isOpen, setIsOpen, viewHistory, handleMovieSelection } = useHistory();

  const toggleDrawer = (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
    if (
      event &&
      event.type === 'keydown' &&
      ((event as React.KeyboardEvent).key === 'Tab' ||
        (event as React.KeyboardEvent).key === 'Shift')
    ) {
      return;
    }
    setIsOpen(open);
  };

  return (
    <div className='historyContainer'>
      <IconButton
        onClick={toggleDrawer(true)}
        size='large'
        edge='start'
        color='inherit'
        aria-label='open menu'
        sx={{ mr: 2 }}
      >
        <ManageHistoryIcon /> 
      </IconButton>
      <small onClick={toggleDrawer(true)}>View history</small>
      <SwipeableDrawer
        anchor={'left'}
        open={isOpen}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
      >
        <div className='historyContent'>
          <div className='historyTitle'>Movie views history</div>
          <Stack direction='column' spacing={1} sx={{mt:2}}>
            {viewHistory.map((movie: Movie) => (
              <Chip
                key={movie.id}
                sx={{ backgroundColor: '#454545', color: "white" }}
                onClick={() => handleMovieSelection(movie)}
                label={movie.Title}
                
              />
            ))}
          </Stack>
        </div>
      </SwipeableDrawer>
    </div>
  );
}
