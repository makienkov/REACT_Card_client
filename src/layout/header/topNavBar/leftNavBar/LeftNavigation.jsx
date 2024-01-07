import { Box } from "@mui/material";
import React from "react";
import NavItem from "routes/components/NavItem";
import ROUTES_MODEL from "routes/routesModel";
import { useUser } from "users/providers/UserProvider";
import LogoIcon from "layout/header/topNavBar/logo/LogoIcon";
import Logo from "layout/header/topNavBar/logo/Logo";

export default function LeftNavBar() {
  const { user } = useUser();
  return (
    <Box>
      <LogoIcon />

      <Box
        sx={{
          display: { xs: "none", md: "inline-flex" },
        }}
      >
        <Logo />
        <NavItem to={ROUTES_MODEL.ABOUT} label="About" />
        {user && <NavItem to={ROUTES_MODEL.FAV_CARDS} label="Favorite cards" />}
        {user?.isBusiness && <NavItem to={ROUTES_MODEL.MY_CARDS} label="My cards" />}
        {user?.isAdmin && <NavItem to={ROUTES_MODEL.SANDBOX} label="Sandbox" />}
      </Box>
    </Box>
  );
}
