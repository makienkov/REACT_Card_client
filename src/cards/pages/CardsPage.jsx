import { Container } from "@mui/material";
import React, { useCallback, useEffect } from "react";

import PageHeader from "components/PageHeader";

import useCards from "cards/hooks/useCards";
import CardsFeedback from "cards/components/CardsFeedback";

export default function CardsPage() {

  const {
    isLoading,
    error,
    filterCards,
    handleGetCards,
    handleDeleteCard,
    handleLikeCard,
    handleEdit,
  } = useCards();


  useEffect(() => {
    handleGetCards();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleDelete = useCallback(async (id) => {
    await handleDeleteCard(id);
    handleGetCards();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);



  return (
    <div>
      <Container sx={{ mt: 0 }}>
        <PageHeader
          title="Cards"
          subtitle="On this page you can find all business cards from all categories"
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
    </div>
  );
}
