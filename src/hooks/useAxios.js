import axios from "axios";
import { useEffect } from "react";
import { useSnack } from "providers/SnackBarProvider";
import { useUser } from "users/providers/UserProvider";

const useAxios = () => {

    const snack = useSnack();
    const { token } = useUser();

    useEffect(() => {
        axios.defaults.headers.common["x-auth-token"] = token;
        const requestInterceptor = axios.interceptors.request.use((request) => {
            return request; 
        }, (error) => {
            console.log("An error occurred during the request to server");
            console.log(error);
            return Promise.reject(error); 
        });

        const responseInterceptor = axios.interceptors.response.use((response) => {
            return response;
        }, (error) => {
            console.log("An error occurred during the response from server");
            console.log(error);
            snack("error", `Error retrieving cards:\n${error.message}`, "outlined");
            return Promise.reject(error); 
        });


        return () => {
            axios.interceptors.request.eject(requestInterceptor);
            axios.interceptors.response.eject(responseInterceptor);
        };

    }, [snack, token]);
};

export default useAxios;