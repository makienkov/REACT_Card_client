import React from 'react';
import { Typography } from '@mui/material';

export default function LogoText() {


  return (
    <>
      <Typography
        variant='h4'
        sx={{
          display: { xs: 'none', md: 'inline-flex' },
          marginRight: 2,
          fontFamily: 'fantasy',

        }}
      >
        BCards
      </Typography >
    </>

  );
}
