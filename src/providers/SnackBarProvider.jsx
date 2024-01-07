import React, {
    useState,
    useContext,
    useCallback,
    createContext
} from "react";
import { node } from "prop-types";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";


const SnackbarContext = createContext();


export default function SnackBarProvider({ children }) {
    const [isSnackOpen, setOpenSnack] = useState(false);
    const [snackColor, setSnackColor] = useState("success");
    const [snackVariant, setSnackVariant] = useState("filled");
    const [snackMessage, setSnackMessage] = useState("in snackbar");

    const setSnack = useCallback((color, message, variant = "filled") => {
        setOpenSnack(true);
        setSnackColor(color);
        setSnackVariant(variant);
        setSnackMessage(message);
    }, []);

    return (
        <>
            <Snackbar
                anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
                open={isSnackOpen}
                autoHideDuration={2000}
                onClose={() => setOpenSnack(false)}
            >
                <Alert severity={snackColor} variant={snackVariant}>
                    {snackMessage}
                </Alert>
            </Snackbar>

            <SnackbarContext.Provider value={setSnack}>
                {children}
            </SnackbarContext.Provider>
        </>
    );
};


export const useSnack = () => {
    const context = useContext(SnackbarContext);
    if (!context)
        throw new Error("useSnack must be used within a SnackBarProvider");
    return context;
};


SnackBarProvider.propTypes = {
    children: node.isRequired,
};