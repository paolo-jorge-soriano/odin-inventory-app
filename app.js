require("dotenv").config();

const express = require("express");
const app = express();
const path = require("node:path");

// Routers here

// HTML
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// Form data
app.use(express.urlencoded({ extended: true }));

// CSS
const assetsPath = path.join(__dirname, "public");
app.use(express.static(assetsPath));

// Routes here

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
