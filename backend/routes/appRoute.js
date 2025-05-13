import {loginUser, profile, register} from './../controllers/appControllers.js'
import express from 'express'

const route = express.Router()

    route.post("/register", register)
    route.post("/login", loginUser)
    route.post("/profile", profile)

export default route;