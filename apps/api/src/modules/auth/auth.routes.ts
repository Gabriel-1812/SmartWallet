import {Router, type Router as ExpressRouter} from "express"
import { loginController } from "./auth.controller"

const authRoutes: ExpressRouter = Router()

authRoutes.post("/login", loginController)

export {authRoutes}