import mongoose, { Model, Schema } from "mongoose";
import IProduct, { IProductModel } from "./products-interface";


type ProductModel = Model<IProduct, object, IProductModel>;

const productSchema = new Schema<IProduct,ProductModel, IProductModel >({
    
    name:String,
    brand:String,
    price:Number,
    type: ['Mountain' , 'Road' , 'Hybrid' , 'BMX' , 'Electric'],
    description : String,
    quantity:Number,
    inStock : Boolean,
    createdAt: {
        type: String,
        required: false 
    },
    updatedAt: {
        type: String,
        required: false 
    }
},  { versionKey: false })


productSchema.method('duplicateCheck', async function duplicateCheck(){
    const result = await Product.findById(this._id)
    return result
});







export const Product = mongoose.model("Product",productSchema)