const express = require('express')
const app = express()
const cors = require('cors')
const fs = require('fs')
const path = require('path')
const psql = require('./modules/postgres')()
const morgan = require('morgan')
const helmet = require("helmet");




app.use(morgan('dev'))
app.use(helmet());
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(async (req, res, next) => {
    req.psql = await psql
    next()
})

app.use(cors()) 
app.listen(80, () => console.log(`SERVER READY`))


fs.readdir(path.join(__dirname, "routes"), async (err, files) => {
    await files.forEach(file => {
        const route = require(path.join(__dirname, "routes", file))
        if(route.path && route.router) app.use(route.path, route.router)
    })
    await app.use((_, res) => res.status(404).json({
        ok: false,
        message: "Not found"
    }))
})





// PUT, DELETE, PATCH, GET, POST

// 200 Success
// 300 Redirect
// 400 Client Error
// 500 Server Error

// MVC = Model View Router

// DDOS = 1000000 + 10M