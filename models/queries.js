const pool = require("./pool");

async function getAllProducts() {
  const { rows } = await pool.query("SELECT * FROM products");
  return rows;
}

async function getAllCategories() {
  const { rows } = await pool.query("SELECT * FROM categories");
  return rows;
}

async function insertCategory(categoryName) {
  await pool.query("INSERT INTO categories (name) VALUES ($1)", [categoryName]);
}

async function insertProduct(productName, productCategory) {
  await pool.query("INSERT INTO products (name, category_id) VALUES ($1, $2)", [productName, productCategory]);
}

module.exports = {
  getAllProducts,
  getAllCategories,
  insertCategory,
  insertProduct,
};
