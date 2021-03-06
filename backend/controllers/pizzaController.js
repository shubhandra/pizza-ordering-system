const Pizza = require("./../models/pizzaModel");
const auth = require("../middleware/auth");

//*******************************Getting  Reading All documents*********************************************/
exports.getAllPizza = async(req, res) => {
    try {
        const pizzas = await Pizza.find();
        res.status(201).json({
            status: "success",
            result: pizzas.length,
            data: {
                pizzas,
            },
        });
    } catch (err) {
        res.status(404).json({
            status: "fail",
            message: err,
        });
    }
};

//*******************************Getting  Reading one document*********************************************/
exports.getPizza = async(req, res) => {
    try {
        const pizza = await Pizza.findById(req.params.id);
        res.status(201).json({
            status: "success",
            data: {
                pizza,
            },
        });
    } catch (err) {
        res.status(404).json({
            status: "fail",
            message: err,
        });
    }
};

//****************Creating or posting Document using Mongoose************** */

exports.createPizza = async(req, res) => {
   // console.log(req.user);
    try {
        if (req.user.role === "admin") {
            const newPizza = await Pizza.create(req.body);
            res.status(201).json({
                status: "success",
                data: {
                    pizza: newPizza,
                },
            });
        } else {
            res.send("Only admin can create pizza");
        }
    } catch (err) {
        res.status(400).json({
            status: "fail",
            message: err,
        });
    }

};

//****************Updating or editing Document using Mongoose************** */
exports.updatePizza = async(req, res) => {
    try {
        if (req.user.role === "admin") {
            const pizza = await Pizza.findByIdAndUpdate(req.params.id, req.body, {
                new: true,
                runValidators: true,
            });

            res.status(201).json({
                status: "success",
                data: {
                    pizza,
                },
            });
        } else {
            res.send("Only admin can update pizza");
        }
    } catch (err) {
        res.status(400).json({
            status: "fail",
            message: err,
        });
    }
};

//****************Deleting Document using Mongoose************** */
exports.deletePizza = async(req, res) => {

  
    try {
        if (req.user.role === "admin") {
            const pizza = await Pizza.findByIdAndDelete(req.params.id);
            res.status(204).json({
                status: "success",
                data: {
                    pizza,
                },
            });
        } else {
            res.send("Only admin can delete pizza");
        }
    } catch (err) {
        res.status(404).json({
            status: "fail",
            message: err,
        });
    }
};