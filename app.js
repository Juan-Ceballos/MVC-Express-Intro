const express = require('express')
const app = express()
const PORT = 3000
const path = require('path')
const mainController = require('./controllers/mainController')

app.get('/', mainController.home)

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
})

