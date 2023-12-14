export const formatDates = (date: any) => {
  if (!date) return "";
  const year = date.getFullYear();
  const month = ("0" + (date.getMonth() + 1)).slice(-2); // Months are 0-based in JavaScript
  const day = ("0" + date.getDate()).slice(-2);
  return `${year}-${month}-${day}`;
};
