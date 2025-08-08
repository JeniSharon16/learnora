const express = require("express");
const mongoose = require("mongoose");
const courseRoutes = require("./routes/courseRoutes");
const cors = require("cors");
require("dotenv").config();
const path = require("path");
const authRoutes = require(path.join(__dirname, "routes", "authRoutes"));


const app = express();
app.use(cors());
app.use(express.json());

// ✅ API Routes
app.use("/api/auth", authRoutes);
app.use("/api/courses", courseRoutes);

// ✅ Load DB URI
const uri = process.env.MONGO_URI;
if (!uri) {
  console.error("❌ MONGO_URI not found in .env file");
  process.exit(1);
}

// ✅ Connect to MongoDB and Start Server Once
mongoose.connect(uri)
  .then(() => {
    app.listen(process.env.PORT || 5000, () => {
      console.log("✅ MongoDB connected");
      console.log("🚀 Server started on port", process.env.PORT || 5000);
    });
  })
  .catch((err) => {
    console.error("❌ DB connection error:", err);
  });
