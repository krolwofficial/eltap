export async function getOrderData(clientId, startDate, endDate) {
  const response = await fetch(
    `http://localhost:5000/getOrderData?clientId=${clientId}&startDate=${startDate}&endDate=${endDate}`
  );
  const data = await response.json();
  return data;
}
