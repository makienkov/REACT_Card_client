import { Container } from "@mui/material";
import React from "react";
import { Navigate } from "react-router-dom";

import ROUTES_MODEL from "routes/routesModel";
import useForm from "forms/hooks/useForm";
import UserForm from "users/components/UserForm";
import initialSignupForm from "users/helpers/initialForms/initialSignupForm";
import useUsers from "users/hooks/useUsers";
import signupSchema from "users/models/joi-schema/signupSchema";
import { useUser } from "users/providers/UserProvider";


export default function SignupPage() {
    const { handleSignup } = useUsers();

    const { value, ...rest } = useForm(
        initialSignupForm,
        signupSchema,
        handleSignup
    );

    const { user } = useUser();
    if (user) return <Navigate replace to={ROUTES_MODEL.CARDS} />;

    return (
        <Container
            sx={{
                paddingTop: 8,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <UserForm
                onSubmit={rest.onSubmit}
                onReset={rest.handleReset}
                validateForm={rest.validateForm}
                title="register form"
                errors={value.errors}
                data={value.data}
                onInputChange={rest.handleChange}
                setData={rest.setData}
            />
        </Container>
    );
}
