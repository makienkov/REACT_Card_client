import { Fab } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import React from "react";
import { useNavigate } from "react-router-dom";
import ROUTES_MODEL from "routes/routesModel";

export default function AddNewCardButton() {
  const navigate = useNavigate();
  return (
    <Fab
      color="primary"
      aria-label="add"
      sx={{
        position: "fixed",
        bottom: 75,
        right: 16,
      }}
      onClick={() => {
        navigate(ROUTES_MODEL.CREATE_CARD);
      }}
    >
      <AddIcon />
    </Fab>
  );
}
