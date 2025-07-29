const { Router } = require("express");
const productsRouter = Router();
const productsController = require("../controllers/productsController");

productsRouter.get("/", productsController.getProductsPage);

productsRouter.get("/newProduct", productsController.getNewProductForm);
productsRouter.post("/newProduct", productsController.postNewProductForm);

module.exports = productsRouter;
