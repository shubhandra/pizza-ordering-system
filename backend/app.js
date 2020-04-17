const express = require("express");
require("dotenv").config();
const port = process.env.PORT;
const userRouter = require("./routers/userRouter");
const pizzaRouter = require("./routers/pizzaRouter");

require("./db/db");

const app = express();

app.use(express.json());
app.use(userRouter);

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
app.use("/pizzas", pizzaRouter);