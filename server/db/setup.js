const mongoose = require('mongoose')
require("dotenv").config()

const connectionURI = process.env.DB_CONNECTION || 'mongodb://localhost:27017/portfolioSite-db'

const connectDB = async () => {
    try {
        await mongoose.connect(connectionURI)
        console.log(`Connected to ${connectionURI} successfully 🚀`)
    } catch (error) {
        console.log(error)
    }
}

module.exports = connectDB;
