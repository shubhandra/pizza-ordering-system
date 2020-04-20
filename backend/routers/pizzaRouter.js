//Requiring required module
const express = require("express");
const pizzaController = require("../controllers/pizzaController");
const userController = require("../controllers/userController");
const auth = require("../middleware/auth");
const router = express.Router();

//Defining routes
router
    .route("/")
    .get(pizzaController.getAllPizza)
    .post(auth, pizzaController.createPizza);
router
    .route("/:id")

.get(pizzaController.getPizza)
    .patch(auth, pizzaController.updatePizza)
    .delete(auth, pizzaController.deletePizza);

module.exports = router;