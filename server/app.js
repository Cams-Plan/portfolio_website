const express = require("express")
const cors = require("cors")
const logger = require("morgan")

const app = express()

// Route Imports
// const authRoute = require("./routes/authRoute")
const projectRoute = require("./routes/projectsRoute")

// Middleware
app.use(cors())
app.use(express.json())

app.use(logger('dev', {
    // skip over the logger if automated tests are being ran on the APIs
    skip: (req, res) => {
        return process.env.NODE_ENV === 'test'
    }
}))

// Root Endpoint

app.get('/', (req, res)=> {
    res.json({
        name: "Camille's Portolio Website API",
        description: "Welcome to the API that powers a lot of my dynamic content such as project information and auth"
    })
})

// Routes

// app.use("/auth", authRoute)
app.use("/projects", projectRoute)
// app.use("auth", authRoute)

// *CATCH ALL FOR PUT & POST* (place last)
app.put("*", (req, res) => {
    res.status(405).json({
        status: res.statusCode,
        message: "Method Not Allowed"
    })
})
  
app.post("*", (req, res) => {
    res.status(405).json({
        status: res.statusCode,
        message: "Method Not Allowed"
    })
})

app.get("*", (req, res) => {
    res.status(405).json({
        status: res.statusCode,
        message: "Method Not Allowed"
    })
})

app.delete("*", (req, res) => {
    res.status(405).json({
        status: res.statusCode,
        message: "Method Not Allowed"
    })
})

module.exports = app

