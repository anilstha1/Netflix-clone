export const formatDate = (date) => {
  const formattedDate = new Date(date);
  const releaseYear = formattedDate.getFullYear();

  return releaseYear;
};
