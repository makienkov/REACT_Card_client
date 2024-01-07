import { Box } from "@mui/material";
import { node } from "prop-types";
import { useTheme } from "providers/ThemeProvider";
import React, { useMemo } from "react";

export default function Main({ children }) {

    const { isDark } = useTheme();

    const dynamicBackground = useMemo(() => {
        return isDark ? "#333333" : "#e3f2fd";
    }, [isDark]);

  return (
    <Box
      sx={{
        minHeight: "85vh",

        backgroundColor: dynamicBackground,
      }}
    >
      {children}
    </Box>
  );
}

Main.propTypes = {
  children: node,
};
