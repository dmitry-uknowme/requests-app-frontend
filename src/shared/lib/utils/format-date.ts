const formatDate = (date: Date | number) => {
  if (!(date instanceof Date)) {
    date = new Date(date);
  }
  return `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`;
};

export default formatDate;
