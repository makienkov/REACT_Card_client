export const makeFirstLetterCapital = (text) => {
  const term = text.toLowerCase().trim();
  return term.charAt(0).toUpperCase() + term.slice(1);
};

export const capitalizeWords = (str) => {
  return str
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(' ');
};
