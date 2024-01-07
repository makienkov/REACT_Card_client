
const normalizeCard = (card) => {
  // const defaultImageUrl = "assets/images/business-card-top-image.jpg";
  const defaultImageUrl = "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcT1UN69zXzV5mvgas8eVmVlCFVX4Y90-a-27rimX9-NawTgEdQd";

  card.imageUrl = card.imageUrl !== "" ? card.imageUrl : defaultImageUrl;
  card.imageAlt = card.imageAlt !== "" ? card.imageAlt : "logo";


  return {
    title: card.title,
    subtitle: card.subtitle,
    description: card.description,
    phone: card.phone,
    email: card.email,
    web: card.webUrl,
    image: {
      url: card.imageUrl,
      alt: card.imageAlt,
    },
    address: {
      state: card.state,
      country: card.country,
      city: card.city,
      street: card.street,
      houseNumber: card.houseNumber,
      zip: card.zip,
    },
  };
};

export default normalizeCard;
