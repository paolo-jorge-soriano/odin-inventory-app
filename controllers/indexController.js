const db = require("../models/queries");

async function getIndexPage(req, res) {
  res.render("index", {
    title: "Home",
  });
}

module.exports = {
  getIndexPage,
};
