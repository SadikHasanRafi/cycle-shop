import IProduct from "./products-interface";
import { ProductModel } from "./products-model";


const createProduct = async (data:IProduct) => {
    const result = await ProductModel.create(data)
    return result
}

const getAllProducts= async (filter : unknown ) => {
    console.log("🚀 ~ getAllProducts ~ filter:", filter)
    const result = await ProductModel.find(filter ? filter : {})
    return result
}



export const productService = {
    createProduct,getAllProducts
}