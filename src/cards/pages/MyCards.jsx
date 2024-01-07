import { Container } from "@mui/material";
import React, { useCallback, useEffect } from "react";

import PageHeader from "components/PageHeader";

import useCards from "cards/hooks/useCards";
import CardsFeedback from "cards/components/CardsFeedback";
import { useUser } from "users/providers/UserProvider";
import { useNavigate } from "react-router-dom";
import ROUTES_MODEL from "routes/routesModel";
import AddNewCardButton from "cards/components/card/card_components/AddNewCardButton";


export default function MyCards() {

  const {
    isLoading,
    error,
    filterCards,
    handleGetCards,
    handleGetMyCards,
    handleDeleteCard,
    handleLikeCard,
    handleEdit,
  } = useCards();

  const { user } = useUser();

  const navigate = useNavigate();


  useEffect(() => {
    if (!user) {
      navigate(ROUTES_MODEL.CARDS);
    } else {
      handleGetMyCards();
    }
  }, [user, handleGetMyCards, navigate]);

  const handleDelete = useCallback(async (id) => {
    await handleDeleteCard(id);
    handleGetCards();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);




  return (
    <div>
      <Container sx={{ mt: 0 }}>
        <PageHeader
          title="My Cards"
          subtitle="On this page you can find all your business cards"
        />
        <CardsFeedback
          cards={filterCards}
          isLoading={isLoading}
          error={error}
          handleDelete={handleDelete}
          handleEdit={handleEdit}
          handleLike={handleLikeCard}
        />
      </Container>
      <AddNewCardButton />

    </div>
  );
}
