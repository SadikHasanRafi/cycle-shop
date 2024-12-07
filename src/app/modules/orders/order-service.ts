import { IOrder } from "./order-interface";
import { Product } from '../products/products-model';
import IProduct from "../products/products-interface";
import { Order } from "./order-model";

const createOrder =async (data: IOrder) => {

    const order = new Order(data);
    const product  = await Product.findById(data.product) as IProduct;
    let result : { message: string, success: boolean, data: unknown }
    if(product.inStock){

        const quantity = product.quantity - data.quantity;
        product.quantity = quantity;

        let inStock:boolean = product.inStock
        if(quantity < 0){
            result =  { message: "Insufficient stock.", success: false, data:{} }
            return result
        }
        else if(quantity == 0){
            inStock = false;
        }else {
            inStock = true;
        }
        await Product.findOneAndUpdate({ _id: product._id }, {$set: {quantity:quantity, inStock:inStock}}, { new: true });
        const finalProduct  = await Product.findOne({ _id: product._id })
        let orderResult
        if (finalProduct) {
            orderResult = await order.save()
            result =  { message: "Order created successfully.", success: true, data:orderResult }
        }else{
            result =  { message: "Failed to order.", success: false, data:orderResult }
        }
    }else {
        result =  { message: "This product is not available right now.", success: false, data:{} }
    }

    return result

}


const calculateRevenue =async () => {

    const order = await Order.aggregate([
        {
            $group: {
                _id: null,
                totalRevenue: { $sum: {
                    $multiply: ["$quantity", "$totalPrice"]
                } }
            }
        },
        {
            $project :{
                totalRevenue : 1,
                _id : 0
             }
        }
    ])
    console.log("🚀 ~ calculateRevenue ~ order:", order)

    return order
}


export const orderService = {
    createOrder,calculateRevenue
}