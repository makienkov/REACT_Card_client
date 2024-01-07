import { Divider, Typography } from "@mui/material";
import React from "react";

import PropTypes from 'prop-types';


export default function PageHeader({ title, subtitle }) {
  return (
    <>
      <Typography variant="h2" component="h1" color={"brown"}>
        {title}
      </Typography>
      <Typography variant="h5" component="h2" color={"brown"}>
        {subtitle}
      </Typography>
      <Divider sx={{ my: 2 }} />
    </>
  );
}

PageHeader.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string
}