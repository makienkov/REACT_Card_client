
import React, {  useMemo } from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import LoopIcon from "@mui/icons-material/Loop";
import { Navigate, useNavigate } from "react-router-dom";


import useForm from "forms/hooks/useForm";
import Input from "forms/components/Input";
import FormButton from "forms/components/FormButton";
import ROUTES_MODEL from "routes/routesModel";
import { capitalizeWords } from "forms/utils/algoMethods.js";
import PageHeader from "components/PageHeader";

import loginSchema from "users/models/joi-schema/loginSchema";
import useUsers from "users/hooks/useUsers";
import { useUser } from "users/providers/UserProvider";
import initialLoginForm from "users/helpers/initialForms/initialLoginForm";



export default function LoginPage() {

    

    const {user} = useUser(); 
    const {handleLogin} = useUsers(); 
    const handleSubmit = handleLogin; 

    const { value, ...rest } = useForm(initialLoginForm, loginSchema, handleSubmit);

    const navigate = useNavigate();

    const title = "login form";

    const capitalizedTitle = useMemo(() => capitalizeWords(title), [title]);

    if (user) {
        return <Navigate replace to={ROUTES_MODEL.ROOT}></Navigate>;
    }  
    return (
        <Container>
            <PageHeader
                title="Welcome to the log-in page"
                subtitle="Please enter your username and password"
            />
            <Container sx={{ mt: 8, display: "flex", justifyContent: "center", alignItems: "center" }}>
                <Box component="form" sx={{ mt: 2, p: { xs: 1, sm: 2 }, maxWidth: "450px" }}
                    autoComplete="off" noValidate>
                    <Typography align="center" variant="h5" component="h1" mb={2}>
                        {capitalizedTitle}
                    </Typography>

                    <Grid container spacing={1}>
                        <Input
                            label="email"
                            name="email"
                            type="email"
                            data={value.data}
                            error={value.errors.email}
                            onChange={rest.handleChange}
                        />
                        <Input
                            label="password"
                            name="password"
                            type="password"
                            data={value.data}
                            error={value.errors.password}
                            onChange={rest.handleChange}
                        />
                    </Grid>

                    <Grid container spacing={1} my={2} direction="row" width="100">
                        <Grid item xs={12} sm={6}>
                            <FormButton
                                node="cancel"
                                color="error"
                                component="div"
                                variant="outlined"
                                onClick={() => navigate(ROUTES_MODEL.CARDS)}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <FormButton
                                node={<LoopIcon />}
                                variant="outlined"
                                component="div"
                                onClick={rest.handleReset}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <FormButton
                                node="Submit"
                                onClick={rest.onSubmit}
                                disabled={!!rest.validateForm()}
                                size="large"
                            />
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </Container>
    );
}
