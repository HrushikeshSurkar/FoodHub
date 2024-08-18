import express from "express";
import dotenv from "dotenv";
import session from "express-session";
import connectDB from "./config/dbConfig.js";
import sessionConfig from "./config/sessionConfig.js";
import authRoutes from "./routes/authRoutes.js";

dotenv.config();
connectDB();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(sessionConfig);

app.use("/api/auth", authRoutes);

app.get("/", (req, res) => res.send("Backend is running"));

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
