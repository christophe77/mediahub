import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import useOrderBy from './useFilters';
import './Filters.css';
import { OrderBy } from '../../types/movie';

export default function Filters() {
  const { orderBy, handleChangeOrderBy, movieCount } = useOrderBy();
  return (
    <div className='filterContainer'>
      <FormControl>
        <div  className='orderTitle'>
          <b>{movieCount} results - Order by :</b>
        </div>
        <RadioGroup
          className='radioGroupContainer'
          row
          value={orderBy}
          onChange={(event) => handleChangeOrderBy(event.target.value as OrderBy)}
        >
          <FormControlLabel value={'Title'} control={<Radio color='default' />} label='Title' />
          <FormControlLabel
            value={'Rotten Tomatoes Rating'}
            control={<Radio color='default' />}
            label='Rotten Tomatoes Score'
          />
          <FormControlLabel
            value={'IMDB Rating'}
            control={<Radio color='default' />}
            label='IMDB Score'
          />
          <FormControlLabel
            value={'IMDB Votes'}
            control={<Radio color='default' />}
            label='IMDB Votes'
          />
        </RadioGroup>
      </FormControl>
    </div>
  );
}
