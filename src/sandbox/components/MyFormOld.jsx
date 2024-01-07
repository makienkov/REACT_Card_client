import React from 'react';
import useText from 'sandbox/hooks/useText';
import { TextField, Button, Box } from '@mui/material';

const MyFormOld = () => {
  const [text, update, reset, cancel, onSubmit] = useText('');

  return (
    <Box>
      <Box mb={2}>
        <TextField
          variant="outlined" 
          fullWidth 
          value={text} 
          onChange={update} 
        />
      </Box>
      
      <Box display="flex" justifyContent="space-between">
        <Button onClick={reset}>
          Reset
        </Button>
          
        <Button onClick={cancel}>
          Cancel
        </Button>

        <Button  onClick={onSubmit}>
          Confirm
        </Button>
      </Box>
    </Box>
  );
}

export default MyFormOld;