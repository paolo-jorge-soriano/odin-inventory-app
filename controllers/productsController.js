const db = require("../models/queries");

async function getProductsPage(req, res) {
  const products = await db.getAllProducts();
  res.render("products", {
    title: "Products",
    products: products,
  });
}

async function getNewProductForm(req, res) {
  const categories = await db.getAllCategories();
  res.render("newProduct", {
    title: "Add Product",
    categories: categories,
  });
}

async function postNewProductForm(req, res) {
  const { productName, productCategory } = req.body;
  await db.insertProduct(productName, productCategory);
  res.redirect("/");
}

module.exports = {
  getProductsPage,
  getNewProductForm,
  postNewProductForm,
};
