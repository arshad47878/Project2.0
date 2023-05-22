// import { blue } from '@material-ui/core/colors'
import {  Button, Stack } from '@mui/material'
import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper'; 
import Grid from '@mui/material/Grid';
import { useContext } from 'react';
import { ColorContext } from '../ColorContext';

const Page4 = () => {
  const { color, changeColor } = useContext(ColorContext);

  const handleColorChange = (newColor) => {
    changeColor(newColor);
  };
  return (
    <Stack>
      <Stack >
        <h1>Page Color</h1>
        <Box
      sx={{
        display: 'flex',
        '& > :not(style)': {
          m: 1,
          width: 128,
          height: 128,
          backgroundColor: color 
        },
      }}
    >
      <Paper variant="outlined" />
      <Paper variant="outlined" square />
    </Box>     
      </Stack>
      <Grid container spacing={3}>
      <Box
              sx={{
                p: 2,
                bgcolor: 'background.default',
                display: 'grid',
                gridTemplateColumns: { md: '1fr 1fr 1fr' },
                gap: 3,
              }}
            >
      <Button onClick={() => handleColorChange('red')} variant='contained'>Red</Button>
      <Button onClick={() => handleColorChange('blue')} variant='contained'>Blue</Button>
      <Button onClick={() => handleColorChange('green')} variant='contained'>Green</Button>
      </Box>
      </Grid>
      
    </Stack>
   
  )
}

export default Page4;