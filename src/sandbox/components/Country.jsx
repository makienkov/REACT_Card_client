import { Avatar, Grid, Paper, Typography } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";

export default function Country() {
    const [countries, setCountries] = useState([]);

    useEffect(() => {
        getDataFromAPI();
    }, []);

    const getDataFromAPI = async () => {
        try {
            const response = await axios.get("https://restcountries.com/v3.1/all");


            setCountries(response.data);
        } catch (error) {
            console.log(error);
        }
    };



    return (

        <Grid container spacing={2}>

            {countries.map((country, index) => (
                <Grid item xs={6} sm={4} md={2} lg={1} key={index}>
                    <Paper elevation={3} style={{ padding: 16, textAlign: 'center' , border: '2px solid black'}}>
                        <Typography variant="subtitle1">{country.name.common}</Typography>
                        <Avatar src={country.flags.svg} alt={`Flag of ${country.name.common}`} style={{ borderRadius: 0, width: '100%', height: 'auto', border: '1px solid black' }} />
                        <Typography variant="subtitle1">Capital:<br/> {country?.capital || 'None'} </Typography>
                    </Paper>
                </Grid>
            ))}
        </Grid>

    );
}

