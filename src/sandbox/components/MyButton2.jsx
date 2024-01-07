import { Button } from '@mui/material'
import { React, memo } from 'react'


export default memo(function MyButton({ label_object, css_object }) {
    console.log("My Button2 is rendered")
    return (
        <Button variant={css_object} >
            {label_object.data}
        </Button>
    )
});