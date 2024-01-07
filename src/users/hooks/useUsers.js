// src\users\hooks\useUsers.js
import { useState, useCallback, useMemo } from "react";

import { useNavigate } from "react-router-dom";
import ROUTES_MODEL from "routes/routesModel";

import useAxios from "hooks/useAxios";

import {
  getUser,
  removeToken,
  setTokenInLocalStorage,
} from "users/services/localStorageService";

import { useUser } from "users/providers/UserProvider";

import {getUserData, login, signup } from "users/services/usersApiService";
import normalizeUser from "users/helpers/normalization/normalizeUser";

const useUsers = () => {
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const navigate = useNavigate();
  const { user, setUser, setToken } = useUser();

  useAxios();

  const requestStatus = useCallback(
    (loading, errorMessage, user = null) => {
      setLoading(loading);
      setUser(user);
      setError(errorMessage);
    },
    [setUser, setLoading, setError]
  );

  const handleLogin = useCallback(
    async (user) => {
      try {
        const token = await login(user);
        setTokenInLocalStorage(token);
        setToken(token);
        const userFromLocalStorage = getUser();
        requestStatus(false, null, userFromLocalStorage);
        navigate(ROUTES_MODEL.CARDS);
      } catch (error) {
        requestStatus(false, error, null);
      }
    },
    [navigate, requestStatus, setToken]
  );

  const handleLogout = useCallback(() => {
    removeToken();
    setUser(null);
  }, [setUser]);

  const handleSignup = useCallback(
    async (userFromClient) => {
      try {
        const normalizedUser = normalizeUser(userFromClient);
        await signup(normalizedUser);
        await handleLogin({
          email: userFromClient.email,
          password: userFromClient.password,
        });
      } catch (error) {
        requestStatus(false, error, null);
      }
    },
    [requestStatus, handleLogin]
  );

  const handleGetUser = useCallback(async (id) => {
    try {
      const userData = await getUserData(id);
      setLoading(false);
      setError(null);
      return userData;
    } catch (error) {
      setLoading(false);
      setError(error);
    }
  }, []);

  const value = useMemo(
    () => ({ isLoading, error, user }),
    [isLoading, error, user]
  );

  return {
    value,
    handleLogin,
    handleLogout,
    handleSignup,
    handleGetUser,
  };
};

export default useUsers;
