import { Avatar, IconButton } from "@mui/material";
import React from "react";
import NavBarLink from "routes/components/NavBarLink";
import ROUTES_MODEL from "routes/routesModel";
import businessCardPng from "assets\\images\\business-card.png"

export default function LogoIcon() {

  return (
    <>
      <NavBarLink to={ROUTES_MODEL.ROOT}>
        <IconButton>
          <Avatar
            src={businessCardPng}
            alt="Business card icon"
          />
        </IconButton>
      </NavBarLink>
    </>
  );
}
