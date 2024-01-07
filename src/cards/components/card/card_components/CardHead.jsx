import { CardMedia } from "@mui/material";
import React from "react";
import imgType from "../models/imgType";

import cardImage from "assets/images/business-card-top-image.jpg";

export default function CardHead({ image }) {
  let imageUrl;
  if (image.url === "assets/images/business-card-top-image.jpg") {
    imageUrl = cardImage;
  } else {
    imageUrl = image.url;
  }

  return (
    <>
      <CardMedia
        component="img"
        height="140"
        image={imageUrl}
        alt={image.alt}
      />
    </>
  );
}

CardHead.propTypes = {
  image: imgType,
};


