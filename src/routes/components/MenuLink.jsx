// src\routes\components\MenuLink.jsx
import React from "react";
import { string, func } from "prop-types";
import MenuItem from "@mui/material/MenuItem";
import { makeFirstLetterCapital } from "forms/utils/algoMethods";
import NavBarLink from "./NavBarLink";

const MenuLink = ({ text, navigateTo, onClick, styles }) => {
  return (
    <NavBarLink to={navigateTo}>
      <MenuItem sx={{ ...styles }} onClick={onClick}>
        {makeFirstLetterCapital(text)}
      </MenuItem>
    </NavBarLink>
  );
};

MenuLink.propTypes = {
  navigateTo: string.isRequired,
  onClick: func.isRequired,
  text: string.isRequired,
};

MenuLink.defaultProps = {
  styles: {},
};

export default MenuLink;
