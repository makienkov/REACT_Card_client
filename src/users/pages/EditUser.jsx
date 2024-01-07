import React, { useEffect, useState } from 'react';
import useUsers from 'users/hooks/useUsers';
import { useUser } from 'users/providers/UserProvider';
import { Container, Box, Grid, TextField, Button } from '@mui/material';
import Spinner from 'components/Spinner';
import { Navigate } from 'react-router-dom';
import axios from 'axios';
import ROUTES_MODEL from 'routes/routesModel';
import { useNavigate } from 'react-router-dom';

const apiUrl = process.env.REACT_APP_API_URL || "http://localhost:8181";

export default function EditUserProfile() {
    const navigate = useNavigate();
    const { handleGetUser } = useUsers();
    const { user } = useUser();
    const [userFullData, setUserFullData] = useState(null);
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
    });

    useEffect(() => {
        const fetchData = async () => {
            try {
                if (user) {
                    const userData = await handleGetUser(user.id);

                    if (userData) {
                        setUserFullData(userData);
                        setFormData({
                            firstName: userData.name.first,
                            lastName: userData.name.last,
                            email: userData.email,
                            phone: userData.phone,
                        });
                    } else {
                        console.error('User data not available');
                    }
                }
            } catch (error) {
                console.error('Error fetching user data:', error);
            }
        };

        fetchData();
    }, [handleGetUser, user]);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            // Here we'd make the PUT request to the server
            const response = await axios.put(`${apiUrl}/users/${user.id}`, {
                firstName: formData.firstName,
                lastName: formData.lastName,
                email: formData.email,
                phone: formData.phone,
            });

            // Update the user data with the newly returned user object
            setUserFullData(response.data);
            // Navigate to the user profile page
            navigate(ROUTES_MODEL.USER_PROFILE);
        } catch (error) {
            console.error('Error updating user data:', error);
        }
    };

    if (!user) return <Navigate replace to={ROUTES_MODEL.CARDS} />;

    if (!userFullData) return <Spinner />;

    return (
        <Container maxWidth="md">
            <Box sx={{ my: 4 }}>
                <form onSubmit={handleSubmit}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                label="First Name"
                                name="firstName"
                                variant="outlined"
                                margin="normal"
                                value={formData.firstName}
                                onChange={handleChange}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                label="Last Name"
                                name="lastName"
                                variant="outlined"
                                margin="normal"
                                value={formData.lastName}
                                onChange={handleChange}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                label="Email"
                                name="email"
                                type="email"
                                variant="outlined"
                                margin="normal"
                                value={formData.email}
                                onChange={handleChange}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                label="Phone"
                                name="phone"
                                variant="outlined"
                                margin="normal"
                                value={formData.phone}
                                onChange={handleChange}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Button type="submit" variant="contained" color="primary">
                                Submit
                            </Button>
                        </Grid>
                    </Grid>
                </form>
            </Box>
        </Container>
    );
}