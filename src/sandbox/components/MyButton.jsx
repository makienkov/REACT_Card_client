import { Button } from '@mui/material'
import { React, memo } from 'react'


export default memo(function MyButton({ label, func }) {
    console.log("My Button is rendered")
    return (
        <Button variant='contained' onClick={func}>
            {label}
        </Button>
    )
});