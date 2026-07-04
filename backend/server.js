import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import dbConnect from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";
import formRoutes from "./routes/formRoutes.js";
import responseRoutes from "./routes/responseRoutes.js";

// Configure dotenv
dotenv.config();

// Create Express App
const app = express();

// Connect Database
dbConnect();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/forms", formRoutes);
app.use("/api/responses", responseRoutes);

// Test Route
app.get("/", (req, res) => {
  res.send("🚀 Form Builder API is Running...");
});

// Port
const PORT = process.env.PORT || 5000;

// Start Server
app.listen(PORT, () => {
  console.log(`🚀 Server is running on port ${PORT}`);
});