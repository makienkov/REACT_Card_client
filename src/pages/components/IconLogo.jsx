import React from 'react';
import { Avatar, IconButton } from '@mui/material';
import iconImage from 'assets/images/business-card.png';
import NavBarLink from 'routes/components/NavBarLink';
import ROUTES_MODEL from 'routes/routesModel';

export default function IconLogo() {


  return (
    <NavBarLink to={ROUTES_MODEL.ROOT}>
      <IconButton>
        <Avatar
          src={iconImage}
          alt="Logo"
          sx={{ width: 56, height: 56 }}
        />
      </IconButton>
    </NavBarLink>

  );
}
