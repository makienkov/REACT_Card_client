// src\routes\components\NavBarLink.jsx
import React from "react";

import { node, object, string } from "prop-types";

import { Link } from "react-router-dom";

export default function NavBarLink({ to, children, sx }) {
    return (
        <Link to={to} style={{ ...sx, textDecoration: "none" }}>
            {children}
        </Link>
    );
}

NavBarLink.propTypes = {
    to: string.isRequired,
    children: node.isRequired,
    sx: object,
};

NavBarLink.defaultProps = {
    sx: { color: "#000" },
};
