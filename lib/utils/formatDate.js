const formatDate = (date) => {
  const year = new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
  });
  const month = new Date(date).toLocaleDateString("en-US", {
    month: "2-digit",
  });
  const day = new Date(date).toLocaleDateString("en-US", {
    day: "2-digit",
  });

  return `${year}.${month}.${day}`;
};

export default formatDate;
