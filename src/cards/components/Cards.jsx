import { Grid } from "@mui/material";
import React from "react";

import { arrayOf } from "prop-types";

import cardType from "./card/models/cardType";

import BusinessCard from "./card/BusinessCard";

export default function Cards({
  cardsSub,
  handleDelete,
  handleEdit,
  handleLike,
}) {
  return (
    <>
      <Grid container>
        {cardsSub.map((card) => (
          <Grid item key={card._id} xs={12} sm={6} md={4} lg={3}>
            <BusinessCard
              card={card}
              handleDeleteSub={handleDelete}
              handleLikeSub={handleLike}
              handleEdit={handleEdit}
            />
          </Grid>
        ))}
      </Grid>
    </>
  );
}

Cards.propTypes = {
  cardsSub: arrayOf(cardType),
};
