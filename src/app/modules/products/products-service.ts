import { RootFilterQuery } from "mongoose";
import IProduct from "./products-interface";
import { ProductModel } from "./products-model";


const createProduct = async (data:IProduct) => {
    const result = await ProductModel.create(data)
    return result
}

const getAllProducts= async (filter : unknown ) => {
    const result = await ProductModel.find(filter ? filter : {})
    return result
}

const getSingleProduct = async (filter: RootFilterQuery<IProduct> ) => {
    const result = await ProductModel.find(filter)
    return result
}



export const productService = {
    createProduct,getAllProducts,getSingleProduct
}