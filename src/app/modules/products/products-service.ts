import { RootFilterQuery } from "mongoose";
import IProduct from "./products-interface";
import { Product } from "./products-model";


const createProduct = async (data:IProduct) => {
    const result = await Product.create(data)
    return result
}

const getAllProducts= async (filter : unknown ) => {
    const result = await Product.find(filter ? filter : {})
    const product = new Product(filter )
    const res = product.isAvailable()
    return result
}

const getSingleProduct = async (filter: RootFilterQuery<IProduct> ) => {
    const result = await Product.find(filter)
    return result
}

const updateSingleProduct = async (filter: RootFilterQuery<IProduct>, update: Partial<IProduct>) => {
    const result = await Product.findOneAndUpdate(filter, {$set: update}, {new: true})
    return result
}

const deleteProduct = async (data: RootFilterQuery<IProduct>) => {
    const product = new Product(data)
    const isDuplicate = await product.duplicateCheck();
    let result 
    if (isDuplicate) { 
        result = await Product.findOneAndDelete(data)
    }else{
        result = { message: "Product does not exists", success: false, data:{} }
    }
        return result

}


export const productService = {
    createProduct,getAllProducts,getSingleProduct,updateSingleProduct,deleteProduct
}