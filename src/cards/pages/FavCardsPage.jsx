import { Container } from "@mui/material";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import ROUTES_MODEL from "routes/routesModel";
import { useUser } from "users/providers/UserProvider";
import CardsFeedback from "cards/components/CardsFeedback";
import PageHeader from "components/PageHeader";
import useCards from "cards/hooks/useCards";

export default function FavCardsPage() {

    const {
        isLoading,
        error,
        filterCards,
        handleDeleteCard,
        handleLikeCard,
        handleEdit,
        handleGetFavCards,
    } = useCards();

    const { user } = useUser();

    const navigate = useNavigate();

    useEffect(() => {
        if (!user) {
            navigate(ROUTES_MODEL.CARDS);
        } else {
            handleGetFavCards();
        }
    }, [user, handleGetFavCards, navigate]);

    const handleDelete = async (id) => {
        await handleDeleteCard(id);
        await handleGetFavCards();
    };


    return (
        <div>
            <Container sx={{ mt: 2 }}>
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
