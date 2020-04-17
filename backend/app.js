const express = require('express')
require('dotenv').config()
const port = process.env.PORT
const userRouter = require('./routers/userRouter')

require('./db/db');

//Import Routes Here
const routes     = require('./routers/order');

const app = express()

app.use(express.json())
app.use(userRouter)


//routes  start from here..
app.use('/api/order/',routes);

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})
