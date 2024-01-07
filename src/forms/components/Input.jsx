import React, { useMemo } from "react";
import { string, bool, object, func } from "prop-types";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";

import { makeFirstLetterCapital } from "forms\\utils\\algoMethods.js";


const Input = ({
  variant,
  type,
  name,
  data,
  label,
  required,
  error,
  onChange,
  ...rest
}) => {

  const capitalizedLabel = useMemo(() => makeFirstLetterCapital(label), [label]);

  return (
    <Grid item xs={12} {...rest}>
      <TextField
        variant={variant}
        label={capitalizedLabel}
        type={type}
        id={name}
        name={name}
        value={data[name] ? data[name] : ""}
        required={required}
        helperText={error}
        error={Boolean(error)}
        onChange={onChange}
        fullWidth
        autoComplete="off"
      />
    </Grid>
  );
};

Input.propTypes = {
  name: string.isRequired,
  required: bool.isRequired,
  type: string.isRequired,
  error: string,
  onChange: func.isRequired,
  variant: string,
  data: object,
};

Input.defaultProps = {
  required: true,
  type: "text",
  variant: "outlined",
};

export default React.memo(Input);