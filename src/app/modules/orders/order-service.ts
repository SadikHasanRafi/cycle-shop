import { IOrder } from "./order-interface";
import { Product } from '../products/products-model';
import IProduct from "../products/products-interface";

const createOrder =async (data: IOrder) => {


    const product  = await Product.findById(data.product) as IProduct;
    let result : { message: string, success: boolean, data: unknown }
    if(product.inStock){

        const quantity = product.quantity - data.quantity;
        if(quantity < 0){
            result =  { message: "Insufficient stock.", success: false, data:{} }
        }
        else if(quantity == 0){
            product.quantity = quantity;
            product.inStock = false;
            await Product.findOneAndUpdate({ _id: product._id }, {$set: {quantity:quantity, inStock:false}}, { new: true });
            const finalProduct = await Product.findOne({ _id: product._id })
            result =  { message: "Order created successfully.", success: true, data:finalProduct }
        }else {
            product.quantity = quantity;
            await Product.findOneAndUpdate({ _id: product._id }, { quantity }, { new: true });
            const finalProduct = await Product.findOne({ _id: product._id })
            result =  { message: "Order created successfully.", success: true, data:finalProduct }
        }
    }else {
        result =  { message: "This product is not available right now.", success: false, data:{} }
    }

    return result

}



export const orderService = {
    createOrder
}