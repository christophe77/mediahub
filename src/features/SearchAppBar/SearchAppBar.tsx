import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import SearchIcon from '@mui/icons-material/Search';

import History from '../History/History';
import useSearchAppBar from './useSearchAppBar';

import StyledInputBase from './Styled/StyledInputBase';
import StyledSearch from './Styled/StyledSearch';
import StyledSearchIconWrapper from './Styled/StyledSearchIconWrapper';

export default function SearchAppBar() {
  const { setTyping } = useSearchAppBar();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position='static' sx={{ backgroundColor: 'black' }}>
        <Toolbar>
          <History />

          <Typography
            variant='h6'
            noWrap
            component='div'
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            MEDIAHUB
          </Typography>
          <StyledSearch>
            <StyledSearchIconWrapper>
              <SearchIcon />
            </StyledSearchIconWrapper>
            <StyledInputBase
              placeholder='Search movie'
              inputProps={{ 'aria-label': 'search movie' }}
              onChange={(event) => setTyping(event.target.value)}
            />
          </StyledSearch>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
