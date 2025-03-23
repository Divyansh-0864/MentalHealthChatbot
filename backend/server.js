import express from "express";
import dotenv from "dotenv";
import chatRoutes from "./routes/chatbotRoutes.js";

dotenv.config();

const cors = require('cors');
const app = express();

app.use(express.json());
app.use(cors({ origin: "*" }));

app.use("/api", chatRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

