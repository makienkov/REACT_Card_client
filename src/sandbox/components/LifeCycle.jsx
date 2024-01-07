import { Button, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";

export default function LifeCycle() {

    const getInitialCounterValue = () => {

        const savedCounter = localStorage.getItem('counter');


        return parseInt(savedCounter, 10) || 0;


    };

    const [counter, setCounter] = useState(getInitialCounterValue);
    const [counter2, setCounter2] = useState(0);

    useEffect(() => {
        console.log("[]->in component mount");

        return () => {
            console.log("[]->when component unMount");
        };
    }, []);

    useEffect(() => {
        console.log("[counter]->if counter changes  {counter is :}" + counter);
        localStorage.setItem('counter', counter.toString());
    }, [counter]);

    const handleInc = () => {
        setCounter(prev => prev + 1);
    };

    const handleInc2 = () => {
        setCounter2(prev => prev + 1);
    };

    console.log("in every render (component update)");

    return (
        <div>
            <Button onClick={handleInc}>+</Button>
            <Typography>{counter}</Typography>
            <Button onClick={handleInc2}>+</Button>
            <Typography>{counter2}</Typography>
        </div>
    );
}