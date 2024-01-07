import React from "react";

import { AppBar, Toolbar } from "@mui/material";

import { Container } from "@mui/material";
import { Outlet } from "react-router-dom";

import NavItem from "routes/components/NavItem";

export default function SandBox() {
    return (
        <div>
            <AppBar position="sticky" color="transparent">
                <Toolbar sx={{ justifyContent: "space-between" }}>
                    <NavItem to="first" label="firstComp" sx={{ color: "black" }} />

                    <NavItem to="second" label="secondComp" sx={{ color: "blue" }} />

                    <NavItem to="life_cycle" label="lifeCycle" sx={{ color: "green" }} />

                    <NavItem to="country" label="country" sx={{ color: "red" }} />

                    <NavItem to="memo" label="Memoization" sx={{ color: "purple" }} />

                    <NavItem
                        to="custom_hook"
                        label="cHookCounter"
                        sx={{ color: "red" }}
                    />

                    <NavItem to="my_form" label="My_formOld" sx={{ color: "purple" }} />

                    <NavItem to="grand" label="Context" sx={{ color: "red" }} />

                    <NavItem to="my_form1" label="My_form1" sx={{ color: "purple" }} />
                    <NavItem to="my_form2" label="My_form2" sx={{ color: "purple" }} />

                    <NavItem to="form" label="testForm" sx={{ color: "purple" }} />
                </Toolbar>
            </AppBar>

            <Container>
                <Outlet />
            </Container>
        </div>
    );
}
