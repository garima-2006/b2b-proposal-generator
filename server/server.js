const express = require("express");
const cors = require("cors");
require("dotenv").config();

const proposalRoutes = require("./routes/proposalRoutes");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/proposal", proposalRoutes);

app.listen(5000, () => {
  console.log("Server running on port 5000");
});