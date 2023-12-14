interface OrderData {
  clientId: number;
  quantity: number;
  createdDate: string;
}

export async function fetchOrderData(
  clientId: number,
  startDate: string,
  endDate: string
): Promise<OrderData> {
  const url = `https://api-test.eltap.com/api/v1/Analytics/daily-order-data?clientId=${clientId}&startDate=${startDate}&endDate=${endDate}`;

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("Network response was not ok");
  }

  const data: OrderData = await response.json();

  return data;
}
