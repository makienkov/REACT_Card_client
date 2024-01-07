import { Box, Button, TextField, Typography } from "@mui/material";
import Joi from "joi";
import React, { useState } from "react";
import { Link } from 'react-router-dom';
import ROUTES_MODEL from "routes/routesModel";

const schema = Joi.object({
    firstName: Joi.string().alphanum().min(3).max(10).required(),
    lastName: Joi.string().allow(""),
});

export default function MyForm1() {
    const [formData, setFormData] = useState({ firstName: '', lastName: '' });
    const [isDisabledSubmit, setIsDisabledSubmit] = useState(false);
    const [errorStatusFirstName, setErrorStatusFirstName] = useState(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleReset = () => {
        setFormData({ firstName: '', lastName: '' });
    };

    const handleCancel = () => {
        console.log("form cancelled");

    };

    const handleSubmit = async (e) => {
        e.preventDefault(); 

        try {
            await schema.validateAsync(formData, { abortEarly: false });
            console.log("input_value: no errors found");
        } catch (err) {
            console.error(err);
            if (err.details.find((detail) => detail.context.key === "firstName")) {
                setErrorStatusFirstName(true);
            }
        }
        console.log(new Date().toISOString()); 

        setIsDisabledSubmit(true); 
    };

    return (
        <>
            <Box
                component={"form"}
                onSubmit={handleSubmit}
            >
                <Typography align="left">Hacker-U </Typography>
                <Box>
                    <TextField
                        label="First Name"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        error={errorStatusFirstName}
                        helperText={errorStatusFirstName ? "Please enter a valid first name" : ""}
                       
                    />
                    <TextField
                        label="Last Name"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                    />
                </Box>
                <Box>
                    <Button onClick={handleReset}>Reset</Button>
                    <Link to={ROUTES_MODEL.ROOT}>
                        <Button onClick={handleCancel}>
                            Cancel
                        </Button>
                    </Link>
                    <Button type="submit" disabled={isDisabledSubmit} >
                        Submit
                    </Button>
                </Box>
            </Box>
        </>
    );
}