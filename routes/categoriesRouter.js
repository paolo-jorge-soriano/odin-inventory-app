const { Router } = require("express");
const categoriesRouter = Router();
const categoriesController = require("../controllers/categoriesController");

categoriesRouter.get("/", categoriesController.getCategoriesPage);

categoriesRouter.get("/newCategory", categoriesController.getNewCategoryForm);
categoriesRouter.post("/newCategory", categoriesController.postNewCategoryForm);

module.exports = categoriesRouter;
