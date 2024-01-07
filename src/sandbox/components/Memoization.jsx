import { Button, Typography } from '@mui/material';
import React, { useCallback, useMemo, useState } from 'react'
import MyButton from './MyButton';
import MyButton2 from './MyButton2';

export default function Memoization() {
    const [counter, setCounter] = useState(0);

    const increment = () => {
        setCounter((prev) => prev + 1);
    };



    const decrement = useCallback(() => {
        setCounter((prev) => prev - 1);
    }, []);




    const myLabelPlus = useMemo(
        () => ({
            data: "+",
        }),
        []
    );


    const myLabelMinus = useMemo(
        () => ({
            data: "-",
        }),
        []
    );


    const resultLongFunction = useMemo(() => {
        console.log("time running function");
        return "outlined";
      }, []); 



    return (
        <div>

            <Typography>{counter}</Typography>
            <Button onClick={increment}>+</Button>

            <MyButton label={"-"} func={decrement} />
            <br />
            <MyButton2 label_object={myLabelPlus} css_object={resultLongFunction} />
            <MyButton2 label_object={myLabelMinus} css_object={resultLongFunction} />


        </div>
    )
}
