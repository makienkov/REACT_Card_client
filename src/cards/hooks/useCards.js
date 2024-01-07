import { useCallback, useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

import {
  changeLikeStatus,
  createCard,
  deleteCard,
  editCard,
  getCard,
  getCards,
  getMyCards,
} from "cards/services/cardApiService";
import useAxios from "hooks/useAxios";
import { useSnack } from "providers/SnackBarProvider";
import { useUser } from "users/providers/UserProvider";
import ROUTES_MODEL from "routes/routesModel";


export default function useCards() {
  const { user } = useUser();
  const [cards, setCards] = useState([]);
  const [card, setCard] = useState(null);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [query, setQuery] = useState("");


  const [filterCards, setFilterCards] = useState(null);

  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  useEffect(() => {
    setQuery(searchParams.get("q") ?? "");
  }, [searchParams]);

  useEffect(() => {
    if (cards)
      setFilterCards(
        cards.filter(
          (card) =>
            card.title.includes(query) || String(card.bizNumber).includes(query)
        )
      );
  }, [cards, query]);

  const requestStatus = (loading, errorMessage, cards, card = null) => {
    setLoading(loading);
    setError(errorMessage);
    setCards(cards);
    setCard(card);
  };


  useAxios();

  const snack = useSnack();

  const handleEdit = useCallback((id) => {
    navigate(`${ROUTES_MODEL.EDIT_CARD}/${id}`)
  }, [navigate]);

  const handleGetCards = useCallback(async () => {
    try {
      const fetchedCards = await getCards();
      setCards(fetchedCards);
      snack("success", "All cards retrieved");
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleDeleteCard = useCallback(async (cardId) => {
    try {
      setLoading(true);
      await deleteCard(cardId);
      snack("success", "Card deleted successfully");
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleGetMyCards = useCallback(async () => {
    try {
      setLoading(true);
      const myCards = await getMyCards();
      setCards(myCards);
      snack("success", "All my cards retrieved");
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleGetFavCards = useCallback(async () => {
    try {
      setLoading(true);
      const cards = await getCards();
      const favCards = cards.filter((card) => card.likes.includes(user.id));
      requestStatus(false, null, favCards);
    } catch (error) {
      requestStatus(false, error, null);
    }
  }, [user]);

  const handleLikeCard = useCallback(
    async (cardId) => {
      try {
        await changeLikeStatus(cardId);
        snack("success", "The business card has been Liked/Un-Liked");
      } catch (error) {
        requestStatus(false, error, null);
      }
    },
    [snack]
  );

  const handleGetCard = useCallback(async (cardId) => {
    try {
      setLoading(true);
      const card = await getCard(cardId);
      requestStatus(false, null, null, card);
      return card;
    } catch (error) {
      requestStatus(false, error, null);
    }
  }, []);

  const handleUpdateCard = useCallback(
    async (cardId, cardFromClient) => {
      try {
        setLoading(true);
        const card = await editCard(cardId, cardFromClient);
        requestStatus(false, null, null, card);
        snack("success", "The business card has been successfully updated");
        setTimeout(() => {
          navigate(ROUTES_MODEL.ROOT);
        }, 1000);
      } catch (error) {
        requestStatus(false, error, null);
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [snack]
  );

  const handleCreateCard = useCallback(
    async (cardFromClient) => {
      try {
        setLoading(true);
        const card = await createCard(cardFromClient);
        requestStatus(false, null, null, card);
        snack("success", "A new business card has been created");
        setTimeout(() => {
          navigate(ROUTES_MODEL.ROOT);
        }, 1000);
      } catch (error) {
        requestStatus(false, error, null);
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [snack]
  );

  return {
    cards,
    isLoading,
    error,
    card,
    filterCards,
    handleEdit,
    handleGetCards,
    handleGetMyCards,
    handleDeleteCard,
    handleGetFavCards,
    handleLikeCard,
    handleGetCard,
    handleUpdateCard,
    handleCreateCard,
  };
}
