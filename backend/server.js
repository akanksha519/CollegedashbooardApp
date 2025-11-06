import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import collegeRoutes from "./routes/collegeRoutes.js";
import reviewRoutes from "./routes/reviewRoutes.js";
import authRoutes from "./routes/authRoutes.js";

dotenv.config();
console.log("MONGO_URI from env:", process.env.MONGO_URI);

const app = express();
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/colleges", collegeRoutes);
app.use("/api/reviews", reviewRoutes);
app.use("/api/auth", authRoutes);

const PORT = process.env.PORT || 5000;
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => app.listen(PORT, () => console.log(`Server running on port ${PORT}`)))
  .catch((err) => console.log(err));

