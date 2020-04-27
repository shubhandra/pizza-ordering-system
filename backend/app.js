const express = require('express');
require('dotenv').config()
const port = process.env.PORT
const cors = require('cors');
require('./db/db');

//Import Routes Here
const routes     = require('./routers/order');
const userRouter = require("./routers/userRouter");
const pizzaRouter = require("./routers/pizzaRouter");

const app = express();
//const cors      = require('cors');

app.use(express.json());
app.use(cors({ origin: 'http://localhost:4200' }));
//app.use(cors());

//routes  start from here..
app.use('/order/',cors(),routes);
app.use("/pizzas", pizzaRouter);
app.use(cors(),userRouter);

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
