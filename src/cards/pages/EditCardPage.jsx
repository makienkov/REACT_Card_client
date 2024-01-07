import { Container } from "@mui/material";
import React, { useEffect } from "react";
import { Navigate, useParams } from "react-router-dom";

import useCards from "cards/hooks/useCards";
import { useUser } from "users/providers/UserProvider";
import ROUTES_MODEL from "routes/routesModel";
import useForm from "forms/hooks/useForm";
import initialCardForm from "cards/helpers/initialForms/initialCardForm";
import cardSchema from "cards/models/joi-schema/cardSchema";
import mapCardToModel from "cards/helpers/normalization/mapToModel";
import normalizeCard from "cards/helpers/normalization/normalizeCard";
import CardForm from "cards/components/CardForm";


export default function EditCardPage() {
  //what do we need in this page
  //id of the card - useParams
  const { id } = useParams();
  //handleUpdateCard & handleGetCard & card - useCards
  const {
    handleUpdateCard,
    handleGetCard,
    card,// value: { card },
  } = useCards();

  //user - useUser (provider)
  const { user } = useUser();
  //useForm (initialForm,schema,onSubmit)
  const { value, setData, ...rest } = useForm(
    initialCardForm,
    cardSchema,
    () => {
      handleUpdateCard(card._id, {
        ...normalizeCard({ ...value.data }),
        bizNumber: card.bizNumber,
        user_id: card.user_id,
      });
    }
  );
  //useEffect - update the form data to this card data
  useEffect(() => {
    handleGetCard(id).then((data) => {
      const modelCard = mapCardToModel(data);
      setData(modelCard);
    });
  }, [handleGetCard, setData, id]);

  if (!user) return <Navigate replace to={ROUTES_MODEL.CARDS} />;

  return (
    <Container
      sx={{
        paddingTop: 8,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <CardForm
        title="edit card"
        onSubmit={rest.onSubmit}
        onReset={rest.handleReset}
        errors={value.errors}
        onFormChange={rest.validateForm}
        onInputChange={rest.handleChange}
        data={value.data}
      />
    </Container>
  );
}
