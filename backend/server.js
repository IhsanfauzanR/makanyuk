import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import db from "./config/db.js";
import menuRoutes from "./routes/menuRoutes.js";

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/menu", menuRoutes);

app.get("/", (req, res) => {
  res.send("Backend MakanYuk aktif 🚀");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
