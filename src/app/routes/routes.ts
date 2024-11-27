import express from 'express'
import { productRoutes } from '../modules/products/products-routes'
import { orderRoutes } from '../modules/orders/order-routes'

const routes = express.Router()


routes.use("/products",productRoutes)
routes.use("/orders",orderRoutes)


export default routes