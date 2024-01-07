import { Card, CardActionArea } from "@mui/material";

import React from "react";
import CardHead from "./card_components/CardHead";
import CardBody from "./card_components/CardBody";
import CardActionBar from "./card_components/CardActionBar";
import cardType from "./models/cardType";
import { func } from "prop-types";

import { useNavigate } from "react-router-dom";
import ROUTES_MODEL from "routes/routesModel";

export default function BusinessCard({
  card,
  handleDeleteSub,
  handleLikeSub,
  handleEdit,
}) {
  const navigate = new useNavigate();

  return (
    <>
      <Card sx={{ width: 250, m: 2 }}>
        <CardActionArea
          onClick={() => navigate(`${ROUTES_MODEL.CARD_INFO}/${card._id}`)}
        >
          <CardHead image={card.image} />
          <CardBody
            title={card.title}
            subtitle={card.subtitle}
            phone={card.phone}
            address={card.address}
            cardNumber={card.bizNumber}
          />
        </CardActionArea>
        <CardActionBar
          id={card._id}
          user_id={card.user_id}
          handleDelete={handleDeleteSub}
          handleLike={handleLikeSub}
          handleEdit={handleEdit}
          likes={card.likes}
        />
      </Card>
    </>
  );
}

BusinessCard.propTypes = {
  card: cardType,
  handleDelete: func,
  handleLike: func,
  handleEdit: func,
};
