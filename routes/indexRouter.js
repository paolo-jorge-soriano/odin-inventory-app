const { Router } = require("express");
const indexRouter = Router();
const indexController = require("../controllers/indexController");

indexRouter.get("/", indexController.getIndexPage);

indexRouter.get("/newCategory", indexController.createNewCategoryGet);
indexRouter.post("/newCategory", indexController.createNewCategoryPost);

indexRouter.get("/newProduct", indexController.createNewProductGet);
indexRouter.post("/newProduct", indexController.createNewProductPost);

module.exports = indexRouter;
