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

async function createNewCategoryGet(req, res) {
  res.render("newCategory");
}

async function createNewCategoryPost(req, res) {
  const { categoryName } = req.body;
  await db.insertCategory(categoryName);
  res.redirect("/");
}

async function createNewProductGet(req, res) {
  const categories = await db.getAllCategories();
  res.render("newProduct", {
    title: "Add Product",
    categories: categories,
  });
}

async function createNewProductPost(req, res) {
  const { productName, productCategory } = req.body;
  await db.insertProduct(productName, productCategory);
  res.redirect("/");
}

module.exports = {
  getIndexPage,
  createNewCategoryGet,
  createNewCategoryPost,
  createNewProductGet,
  createNewProductPost,
};
