import React from "react";
import { Typography } from "@mui/material";

import Spinner from "components/Spinner";
import Error from "components/Error";
import Cards from "./Cards";

export default function CardsFeedback({
  isLoading,
  error,
  cards,
  handleDelete,
  handleEdit,
  handleLike,
}) {
  if (isLoading) return <Spinner />;
  if (error) return <Error errorMessage={error} />;
  if (cards && cards.length === 0)
    return (
      <Typography m={2}>
        Oops... it seems there are no business cards to display
      </Typography>
    );

  return (
    <Cards
      cardsSub={cards}
      handleDelete={handleDelete}
      handleEdit={handleEdit}
      handleLike={handleLike}
    />
  );
}
