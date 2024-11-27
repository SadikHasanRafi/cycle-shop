import IProduct from "./products-interface";
import { ProductModel } from "./products-model";


const createProduct = async (data:IProduct) => {
    const result = await ProductModel.create(data)
    return result
}

const getAllProducts= async () => {
    const result = await ProductModel.find({})
    return result
}



export const productService = {
    createProduct,getAllProducts
}