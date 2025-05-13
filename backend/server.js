import express from 'express'
import mongoose from 'mongoose'
import bodyParser from 'body-parser'
import cors from 'cors'
import dotenv from 'dotenv'
import route from './routes/appRoute.js'

const app = express()

app.use(bodyParser.json())
app.use(cors())

dotenv.config()

const PORT = process.env.PORT || 2500;
const MOGURI = process.env.MOGURI;

mongoose
.connect(MOGURI)
.then(() => {
    console.log("db connected successfully.")
    app.listen(PORT, () => {
        console.log(`Server is running on port: ${PORT}`)
    })
})
.catch((error) => {
    console.log("Error while connecting db", error)
})

app.use("/api", route)