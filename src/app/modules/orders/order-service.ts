import IOder from "./order-interface"
import { Order } from "./order-model"

const createOrder =async (data:IOder) => {
    const order = new Order(data)
    const result = await order.isAvailable()
    return result
}



export const orderService = {
    createOrder
}