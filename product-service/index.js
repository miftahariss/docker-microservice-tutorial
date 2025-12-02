const express = require("express");
const app = express();
app.get("/", (_, res) => {
  res.json({ service: "product-service", products: ["Laptop", "Keyboard", "Mouse"] });
});
app.listen(3002, () => console.log("product-service running on port 3002"));
