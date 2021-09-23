import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { MenuItem } from '@material-ui/core';

export default function BasicTextFields({setMovieName, setYear, setType, selectedType}) {
  const types = [
    {label: 'All', value: ''},
    {label: 'Movie', value: 'movie'},
    {label: 'Series', value: 'series'},
    {label: 'Episode', value: 'episode'}
  ]

  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
        id="filled-select-currency"
        select
        label="Select"
        value={selectedType}
        onChange={setType}
        helperText="Please select your currency"
        variant="filled"
      >
        {types.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>
      <TextField label="Movie Name" onChange={setMovieName} variant="outlined"/>
      <TextField label="Year" onChange={setYear} variant="outlined" type="number" />
    </Box>
  );
}