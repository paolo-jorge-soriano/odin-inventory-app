const db = require("../models/queries");

async function getIndexPage(req, res) {
  const categories = await db.getAllCategories();
  const products = await db.getAllProducts();
  res.render("index", {
    title: "Home",
    categories: categories,
    products: products,
  });
}

module.exports = {
  getIndexPage,
};
