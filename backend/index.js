require("dotenv").config(); // Load environment variables from .env file

const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json()); // to parse JSON bodies

app.get("/order", (req, res) => {
  const orderData = {
    items: [
      {
        title: "Silhouette No. 1 – Vermilion",
        quantity: 1,
        price: 7999,
      },
    ],
    shippingAndHandling: 200,
    beforeTax: 6599,
    taxCollected: 1400,
    orderTotal: 8199,
  };
  res.json(orderData);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
