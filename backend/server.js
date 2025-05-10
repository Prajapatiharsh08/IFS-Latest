require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");

const authRoutes = require("./router/authRoutes");
const personalDetailsRouter = require("./router/personalDetailsRouter");
const investmentPreferencesRouter = require("./router/investmentPreferencesRouter");
const kycRoutes = require("./router/kycRoutes");

const db = require("./config/db");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// Routes
app.use("/api", authRoutes);
app.use("/api/personal_details", personalDetailsRouter);
app.use("/api/investment_preferences", investmentPreferencesRouter);
app.use("/api/kyc", kycRoutes);

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
