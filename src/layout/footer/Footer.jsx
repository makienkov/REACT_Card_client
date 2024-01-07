import {
  BottomNavigation,
  BottomNavigationAction,
  Paper
} from '@mui/material';
import React from 'react';
import InfoIcon from '@mui/icons-material/Info';
import FavoriteIcon from '@mui/icons-material/Favorite';
// import AutoAwesomeMotionIcon from '@mui/icons-material/AutoAwesomeMotion';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import { useNavigate } from 'react-router-dom';
import ROUTES_MODEL from 'routes/routesModel';
import { useUser } from 'users/providers/UserProvider';

export default function Footer() {

  const navigate = new useNavigate();
  const { user } = useUser();

  return (
    <Paper sx={{ position: 'sticky', bottom: 0, left: 0, right: 0 }}
      elevation={3}>
      <BottomNavigation showLabels>
        <BottomNavigationAction
          label="About"
          icon={<InfoIcon />}
          onClick={() => navigate(ROUTES_MODEL.ABOUT)}
        />

        {user &&
          <BottomNavigationAction
            label="Favorite cards"
            icon={<FavoriteIcon />}
            onClick={() => navigate(ROUTES_MODEL.FAV_CARDS)}
          />
        }

        {user?.isBusiness &&
          <BottomNavigationAction
            label="My cards"
            icon={<AccountBoxIcon />}
            onClick={() => navigate(ROUTES_MODEL.MY_CARDS)}
          />
        }

      </BottomNavigation>


    </Paper >
  );

}

