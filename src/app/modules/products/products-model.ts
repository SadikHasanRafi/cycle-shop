import mongoose, { Schema } from "mongoose";
import IProduct from "./products-interface";



const ProductSchema = new Schema<IProduct>({
    name:String,
    brand:String,
    price:Number,
    type: ['Mountain' , 'Road' , 'Hybrid' , 'BMX' , 'Electric'],
    description : String,
    quantity:Number,
    inStock : Boolean
})



export const ProductModel = mongoose.model("Product",ProductSchema)