import React, { useEffect, useState } from "react";
import useUsers from "users/hooks/useUsers";
import { useUser } from "users/providers/UserProvider";
import { Container, Box, Typography, Avatar, Paper, Grid } from "@mui/material";
import Spinner from "components/Spinner";
import { Navigate } from "react-router-dom";
import ROUTES_MODEL from "routes/routesModel";

export default function UserProfile() {
    const { handleGetUser } = useUsers();
    const { user } = useUser();
    const [userFullData, setUserFullData] = useState(null);
  
    useEffect(() => {
        const fetchData = async () => {
          try {
            if (user) {
              const userData = await handleGetUser(user.id);
      
              // Check if the response contains user data
              if (userData) {
                setUserFullData(userData);
              } else {
                console.error("User data not available");
              }
            }
          } catch (error) {
            console.error("Error fetching user data:", error);
          }
        };
      
        fetchData();
      }, [handleGetUser, user]);
      
  
    if (!user) return <Navigate replace to={ROUTES_MODEL.CARDS} />;
  
    if (!userFullData) return <Spinner />;
  
    return (
      <Container maxWidth="md">
        <Box sx={{ my: 4 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={4}>
              <Avatar
                alt={userFullData.image.alt}
                src={userFullData.image.url}
                sx={{ width: 200, height: 200 }}
              />
            </Grid>
            <Grid item xs={12} md={8}>
              <Paper elevation={2} sx={{ p: 2 }}>
                <Typography variant="h4" component="div" gutterBottom>
                  {userFullData.name.first} {userFullData.name.middle}{" "}
                  {userFullData.name.last}
                </Typography>
                <Typography variant="body1" gutterBottom>
                  Email: {userFullData.email}
                </Typography>
                <Typography variant="body1" gutterBottom>
                  Phone: {userFullData.phone}
                </Typography>
                <Typography variant="body1" gutterBottom>
                  Address: {userFullData.address.street}{" "}
                  {userFullData.address.houseNumber}, {userFullData.address.city},{" "}
                  {userFullData.address.state}, {userFullData.address.country},{" "}
                  {userFullData.address.zip}
                </Typography>
              </Paper>
            </Grid>
          </Grid>
        </Box>
      </Container>
    );
  }