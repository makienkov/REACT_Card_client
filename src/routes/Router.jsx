import React from "react";

import { Route, Routes } from "react-router-dom";

import CardsPage from "cards/pages/CardsPage";
import AboutPage from "pages\\AboutPage";
import ROUTES_MODEL from "routes\\routesModel.js";
import ErrorPage from "pages\\ErrorPage";
import FavCardsPage from "cards/pages/FavCardsPage";
import MyCards from "cards/pages/MyCards";
import SignupPage from "users/pages/SignupPage";
import LoginPage from "users/pages/LoginPage";
import EditUser from "users/pages/EditUser";
import UserProfile from "users/pages/UserProfile";

import CardDetailsPage from "cards/pages/CardDetailsPage";

import SandBox from "sandbox/SandBox";
import FirstComponent from "sandbox/components/FirstComponent";
import SecondComponent from "sandbox/components/SecondComponent";
import LifeCycle from "sandbox/components/LifeCycle";
import Country from "sandbox/components/Country";
import Memoization from "sandbox/components/Memoization";
import CustomHookCounter from "sandbox/components/CustomHookCounter";
import GrandComponent from "sandbox/context/GrandComponent";
import MyFormOld from "sandbox/components/MyFormOld";
import MyForm1 from "sandbox/components/MyForm1";
import MyForm2 from "sandbox/components/MyForm2";
import TestForm from "sandbox/components/TestForm";
import AddCardPage from "cards/pages/AddCardPage";
import EditCardPage from "cards/pages/EditCardPage";


export default function Router() {

    return (

        <Routes>
            <Route path={ROUTES_MODEL.ROOT} element={<CardsPage />} />
            <Route path={ROUTES_MODEL.CARDS} element={<CardsPage />} />
            <Route path={ROUTES_MODEL.ABOUT} element={<AboutPage />} />

            <Route path={ROUTES_MODEL.FAV_CARDS} element={<FavCardsPage />} />
            <Route path={ROUTES_MODEL.MY_CARDS} element={<MyCards />} />

            <Route path={ROUTES_MODEL.CREATE_CARD} element={<AddCardPage />} />

            <Route path={ROUTES_MODEL.SIGNUP} element={<SignupPage />} />
            <Route path={ROUTES_MODEL.LOGIN} element={<LoginPage />} />
            <Route path={ROUTES_MODEL.EDIT_USER} element={<EditUser />} />
            <Route path={ROUTES_MODEL.USER_PROFILE} element={<UserProfile />} />

            <Route path={`${ROUTES_MODEL.CARD_INFO}/:id`} element={<CardDetailsPage />} />

            <Route path={`${ROUTES_MODEL.EDIT_CARD}/:id`} element={<EditCardPage />} />

            <Route path={ROUTES_MODEL.SANDBOX} element={<SandBox />} >


                <Route path="first" element={<FirstComponent />} />
                <Route path="second" element={<SecondComponent />} />
                <Route path="life_cycle" element={<LifeCycle />} />
                <Route path="country" element={<Country />} />  
                <Route path="memo" element={<Memoization />} /> 
                <Route path="custom_hook" element={<CustomHookCounter />} /> 
                <Route path="my_form" element={<MyFormOld />} /> 
                <Route path="grand" element={<GrandComponent />} /> 
                <Route path="my_form1" element={<MyForm1 />} /> 
                <Route path="my_form2" element={<MyForm2 />} /> 
                <Route path="form" element={<TestForm />} /> 
            </Route>

            <Route path={ROUTES_MODEL.ERROR404} element={<ErrorPage />} />
        </Routes>

    );

}