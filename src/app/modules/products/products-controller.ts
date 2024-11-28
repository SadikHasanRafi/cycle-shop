import { Request, Response } from "express";
import { productService } from "./products-service";
import mongoose from "mongoose";


 
const createProduct = async (req: Request, res: Response) => {
    try {
        console.log("🚀 ~ getAllProducts ~ req:", req)
        
        const result =await productService.createProduct(req.body)

        res.send({
            message:"Bicycle created successfully", success:true , data : result
        })
    } catch (error) {
        console.log(error)
        res.send(error)
    }

}


 
const getAllProducts  = async (req: Request, res: Response) => {
    let result
    const filter = req.query
    if (filter) {
         result = await productService.getAllProducts(filter)
    }else{
         result = await productService.getAllProducts({})
    }
    res.send({
        message:"Bicycles retrieved successfully", success:true , data : result
    })
}

const getSingleProduct = async (req: Request, res: Response) => {
    const result = await productService.getSingleProduct({_id:new  mongoose.Types.ObjectId(String(req.params.productId))})
    res.send({
        message:"Bicycle retrieved successfully", success:true , data : result
    })
}

const updateSingleProduct = async (req: Request, res: Response) => {
    const update = req.body
    const id = new  mongoose.Types.ObjectId(String(req.params.productId))
    const result = await productService.updateSingleProduct({_id : id}, update )
    res.send({
        message:"Bicycle updated successfully", success:true , data : result
    })
}

const deleteProduct = async (req: Request, res: Response) => {
    const id = new mongoose.Types.ObjectId(req.params.productId)
    const result = await productService.deleteProduct({_id : id})
    res.send({
        message:"Bicycle deleted successfully", success:true , data : result
    })
}


export const productController = {
    getAllProducts,createProduct,getSingleProduct,updateSingleProduct,deleteProduct
}