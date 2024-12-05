import mongoose, { Model, Schema } from "mongoose";
import IProduct, { IProductModel } from "./products-interface";


type ProductModel = Model<IProduct, object, IProductModel>;

const productSchema = new Schema<IProduct,ProductModel, IProductModel >({
    
    name:String,
    brand:String,
    price:Number,
    type:String,
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


productSchema.method('isAvailable', async function isAvailable(){
    const result = await Product.findById(this._id)
    console.log("🚀 ~ isAvailable ~ result:", this)
    // return result===null ? false : result as unknown as IProduct
    return result
});

// productSchema.method('isAvailable', async function duplicateCheck(){
//     const result = await Product.findById(this)
//     return result
// });







export const Product = mongoose.model("Product",productSchema)