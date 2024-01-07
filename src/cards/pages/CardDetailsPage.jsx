import { Container, Typography } from '@mui/material';
import PageHeader from 'components/PageHeader';
import React from 'react'
import { useParams } from 'react-router-dom'


export default function CardDetailsPage() {
  const { id } = useParams();
  return (
    <Container>
      <PageHeader
        title="Card details"
        subtitle="Here you can find all the details about specific card"
      />
      <Typography>Details about card: </Typography>
      <Typography>The card's ID is: {id}</Typography>

    </Container>
  );
}