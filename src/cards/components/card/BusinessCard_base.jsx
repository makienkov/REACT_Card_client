import {
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Divider,
  Typography,
  CardActions,
  Box,
  IconButton,
  CardActionArea,
} from "@mui/material";

import DeleteIcon from "@mui/icons-material/Delete";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import CallIcon from "@mui/icons-material/Call";
import FavoriteIcon from "@mui/icons-material/Favorite";

import React from "react";



export default function BusinessCardBase() {
  return (
    <>
      <Card sx={{ width: 250, m: 2 }}>
        <CardActionArea>

          <CardMedia
            component="img"
            height="140"
            image="assets/images/business-card-top-image.jpg"
            alt="top image"
          />
          <CardHeader
            title="First Card"
            subheader="first subtitle"
          />
          <Divider variant="middle" />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              <strong>Phone:</strong> 055-5555555
            </Typography>
            <Typography variant="body2" color="text.secondary" >
              <strong>Address:</strong> Dizingof 11 Tel Aviv
            </Typography>
            <Typography variant="body2" color="text.secondary">
              <strong>Card Number:</strong> 111111
            </Typography>
          </CardContent>

        </CardActionArea>
        <CardActions sx={{ justifyContent: "space-between" }}>
          <Box>
            <IconButton aria-label="Delete Card">
              <DeleteIcon />
            </IconButton>
            <IconButton aria-label="Edit Card">
              <ModeEditIcon />
            </IconButton>
          </Box>
          <Box>
            <IconButton aria-label="Call">
              <CallIcon />
            </IconButton>
            <IconButton aria-label="Add to favorite">
              <FavoriteIcon />
            </IconButton>
          </Box>
        </CardActions>
      </Card>
    </>
  );
}
