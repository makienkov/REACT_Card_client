import React from "react";
import Box from "@mui/material/Box";

import ROUTES_MODEL from "routes/routesModel";
import NavItem from "routes/components/NavItem";


const NotLogged = () => {
  return (
    <Box>
      <NavItem label="Sign-up" to={ROUTES_MODEL.SIGNUP} />
      <NavItem label="Login" to={ROUTES_MODEL.LOGIN} />
    </Box>
  );
};

export default NotLogged;
