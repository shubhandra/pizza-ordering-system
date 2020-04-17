const mongoose = require("mongoose");

const pizzaSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "A pizza must have  name"],
        enum: [
            "Margherita",
            "Fresh Veggie",
            "Country Special",
            "Farmhouse",
            "Mexican Green Wave",
            "Barbeque Chicken",
            "Chicken Mexicana",
        ],
    },
    size: {
        type: String,
        required: [true, "A pizza must have size"],
        enum: ["small", "medium", "large"],
    },
    price: {
        type: Number,
        required: [true, "A pizza must have price"],
    },
    toppings: {
        type: String,
        required: [true, "A pizza must have topping"],
        enum: [
            "Black Olives",
            "Crisp Capsicum",
            "Golden Corn",
            "Fresh Tomato",
            "Chunky Chicken",
            "Zesty chicken Sausage",
            "Hot N Spicy Chicken",
            "Extra Cheese",
        ],
    },
});

const Pizza = mongoose.model("Pizza", pizzaSchema);
module.exports = Pizza;