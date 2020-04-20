//Requiring required module
const express = require("express");
const pizzaController = require("../controllers/pizzaController");

const router = express.Router();

//Defining routes
router
    .route("/")
    .get(pizzaController.getAllPizza)
    .post(pizzaController.createPizza);
router
    .route("/:id")
    .get(pizzaController.getPizza)
    .patch(pizzaController.updatePizza)
    .delete(pizzaController.deletePizza);

module.exports = router;