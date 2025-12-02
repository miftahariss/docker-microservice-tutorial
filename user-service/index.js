const express = require("express");
const app = express();
app.get("/", (_, res) => {
  res.json({ service: "user-service", users: ["Budi", "Miftah", "Agus"] });
});
app.listen(3001, () => console.log("user-service running on port 3001"));
