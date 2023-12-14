const express = require("express");
const cors = require("cors");
const fetch = require("node-fetch");

const PORT = 5000;
const app = express();

app.use(cors());
const corsOptions = {
  origin: "http://localhost:3000",
};

const requestEndpoint = "https://api-test.eltap.com/api/v1/Clients";

app.get("/getData", cors(corsOptions), async (req, res) => {
  const response = await fetch(requestEndpoint);
  const jsonResponse = await response.json();
  res.json(jsonResponse);
});

app.listen(PORT, () => {
  console.log(`Proxy server listening at http://localhost:${PORT}`);
});

app.get("/getOrderData", cors(corsOptions), async (req, res) => {
  const { clientId, startDate, endDate } = req.query;

  if (!clientId || !startDate || !endDate) {
    return res.status(400).json({ error: "Missing query parameters" });
  }

  const url = `https://api-test.eltap.com/api/v1/Analytics/daily-order-data?clientId=${clientId}&startDate=${startDate}&endDate=${endDate}`;

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();

    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
