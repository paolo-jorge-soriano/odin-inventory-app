require("dotenv").config();

const express = require("express");
const app = express();
const path = require("node:path");

// Routers here
const indexRouter = require("./routes/indexRouter");

// HTML
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// Form data
app.use(express.urlencoded({ extended: true }));

// Assets (CSS, images, etc...)
const assetsPath = path.join(__dirname, "public");
app.use(express.static(assetsPath));

// Routes here
app.use("/", indexRouter);

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
