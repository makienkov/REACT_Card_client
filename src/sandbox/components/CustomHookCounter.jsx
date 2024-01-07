import { Box, Button, Typography } from '@mui/material';
import React from 'react';
import useCounter from 'sandbox/hooks/useCounter';

function CustomHookCounter() {
  const { count, increment, decrement, reset } = useCounter(10);

  return (
    <div>
      <Typography align='center'>Count: {count}</Typography>
      <Box display='flex' justifyContent='center' alignItems='center'>
        <Button variant="outlined" onClick={increment}>Increment</Button>
        <Button variant="outlined" onClick={decrement}>Decrement</Button>
        <Button variant="outlined" onClick={reset}>Reset</Button>
      </Box>

    </div>
  );
}

export default CustomHookCounter;