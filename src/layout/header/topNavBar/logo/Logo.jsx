import { Typography } from "@mui/material";
import React from "react";
import NavBarLink from "routes/components/NavBarLink";
import ROUTES_MODEL from "routes/routesModel";


export default function Logo() {
  return (
    <>
      <NavBarLink to={ROUTES_MODEL.ROOT} sx={{ color: "#FFFFFF" }}>
        <Typography
          variant="h4"
          sx={{
            display: { xs: "none", md: "inline-flex" },
            marginRight: 2,
            fontFamily: "fantasy",
          }}
        >
          BCard
        </Typography>
      </NavBarLink>
    </>
  );
}
