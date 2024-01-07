import React from "react";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import Avatar from "@mui/material/Avatar";
import avatar_img from "assets/images/avatar.png"
import { useMenu } from "../menu/MenuProvider";



const Logged = () => {
  const setOpen = useMenu();
  return (
    <Tooltip title="Open settings">
      <IconButton
        sx={{ p: 0, display: "inline-flex", marginLeft: 2 }}
        onClick={() => setOpen(true)}
      >
        <Avatar alt="Bird" src={avatar_img} />
      </IconButton>
    </Tooltip>
  );
};

export default Logged;

