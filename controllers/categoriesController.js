const db = require("../models/queries");

async function getCategoriesPage(req, res) {
  const categories = await db.getAllCategories();
  res.render("categories", {
    title: "Categories",
    categories: categories,
  });
}

async function getNewCategoryForm(req, res) {
  res.render("newCategory", {
    title: "Add Category",
  });
}

async function postNewCategoryForm(req, res) {
  const { categoryName } = req.body;
  await db.insertCategory(categoryName);
  res.redirect("/");
}

module.exports = {
  getCategoriesPage,
  getNewCategoryForm,
  postNewCategoryForm,
};
