import * as React from 'react';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import UpIcon from '@mui/icons-material/ArrowUpward';

export default function FloatingActionButtonSize() {
  return (
    <Box
    onClick={()=>window.scrollTo(0, 0)}
      sx={{
        '& > :not(style)': { m: 1, position: 'fixed', bottom: 0, right: 0, cursor: 'pointer' },
      }}
    >
      <Fab color='default' aria-label='add'>
        <UpIcon />
      </Fab>
    </Box>
  );
}
