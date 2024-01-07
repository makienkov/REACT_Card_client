import { Container } from "@mui/material";
import React from "react";
import { Navigate } from "react-router-dom";

import useCards from "cards/hooks/useCards";
import ROUTES_MODEL from "routes/routesModel";
import { useUser } from "users/providers/UserProvider";
import cardSchema from "cards/models/joi-schema/cardSchema";
import useForm from "forms/hooks/useForm";
import CardForm from "cards/components/CardForm";
import initialCardForm from "cards/helpers/initialForms/initialCardForm";
import normalizeCard from "cards/helpers/normalization/normalizeCard";

export default function AddCardPage() {
  const { handleCreateCard } = useCards();

  const { user } = useUser();
  const { value, setData, ...rest } = useForm(
    initialCardForm,
    cardSchema,
    () => {
      handleCreateCard({
        ...normalizeCard({ ...value.data }),
        user_id: user._id,
        likes: [],
      });
    }
  );



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
        title="add card"
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
