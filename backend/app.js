const express = require('express')
require('dotenv').config()
const port = process.env.PORT
require('./db/db')

const app = express()

app.use(express.json())

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})
