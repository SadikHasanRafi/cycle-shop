import { Router } from "express"
import { orderController } from "./order-controller"



const routes = Router()

routes.post("/",orderController.createOrder)
routes.get("/revenue",orderController.calculateRevenue)

export const orderRoutes = routes