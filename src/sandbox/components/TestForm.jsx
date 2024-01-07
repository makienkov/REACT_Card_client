
import React, { useMemo } from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import LoopIcon from "@mui/icons-material/Loop";
import { useNavigate } from "react-router-dom";
import Joi from "joi";

import useForm from "forms/hooks/useForm";
import Input from "forms/components/Input";
import FormButton from "forms/components/FormButton";
import ROUTES_MODEL from "routes/routesModel";
import { capitalizeWords } from "forms/utils/algoMethods.js";

export default function TestForm() {
  const title = "test form";

  const INITIAL_FORM = {
    first: "",
    last: "",
  };

  const schema = {
    first: Joi.string().min(2).required(),
    last: Joi.string().min(2).max(7).required(),
  };

  const handleSubmit = (data) => console.log(data);

  const { value, ...rest } = useForm(INITIAL_FORM, schema, handleSubmit);

  const navigate = useNavigate();

  const capitalizedTitle = useMemo(() => capitalizeWords(title), [title]);

  return (
    <Container sx={{ mt: 8, display: "flex", justifyContent: "center", alignItems: "center" }}>
      <Box component="form" sx={{ mt: 2, p: { xs: 1, sm: 2 }, maxWidth: "450px" }}
           onSubmit={rest.onSubmit} autoComplete="off" noValidate>
        <Typography align="center" variant="h5" component="h1" mb={2}>
          {capitalizedTitle}
        </Typography>

        <Grid container spacing={1}>
          <Input
            label="first name"
            name="first"
            data={value.data}
            error={value.errors.first}
            onChange={rest.handleChange}
          />
          <Input
            label="last name"
            name="last"
            data={value.data}
            error={value.errors.last}
            onChange={rest.handleChange}
          />
        </Grid>

        <Grid container spacing={1} my={2} direction="row" width="100">
          <Grid item xs={12} sm={6}>
            <FormButton
              node="cancel"
              color="error"
              component="div"
              variant="outlined"
              onClick={() => navigate(ROUTES_MODEL.SANDBOX)}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormButton
              node={<LoopIcon />}
              variant="outlined"
              component="div"
              onClick={rest.handleReset}
            />
          </Grid>
          <Grid item xs={12}>
            <FormButton
              node="Submit"
              onClick={rest.onSubmit}
              disabled={!!rest.validateForm()}
              size="large"
            />
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}
