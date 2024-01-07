import React, { useMemo } from "react";

import { object, string } from "prop-types";

import { Button, Typography } from "@mui/material";

import NavBarLink from "routes\\components\\NavBarLink";

import { useTheme } from "providers/ThemeProvider";


export default function NavItem({ to, sx, label }) {

    const { isDark } = useTheme();
    const dynamicColor = useMemo(() => {
        return isDark ? "#e3f2fd" : "#333333";
    }, [isDark]);

    return (

        <NavBarLink to={to} sx={sx}>

            <Button color="inherit">

                <Typography color={dynamicColor}>{label}</Typography>

            </Button>

        </NavBarLink>

    );

}

NavItem.propTypes = {
    to: string.isRequired,
    label: string.isRequired,
    sx: object,
};