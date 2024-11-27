import { Request, Response } from "express";



 
const getAllProducts = async (req: Request, res: Response) => {
console.log("🚀 ~ getAllProducts ~ req:", req)

    res.send("asdkjabskdj")
}


 
const createProduct = async (req: Request, res: Response) => {
    console.log("🚀 ~ createProducts ~ req:", req)
    

    res.send("asdkjabskdj")
}

const getSingleProduct = async (req: Request, res: Response) => {
    console.log("🚀 ~ createProducts ~ req:", req)
    

    res.send("asdkjabskdj")
}

const updateSingleProduct = async (req: Request, res: Response) => {
    console.log("🚀 ~ createProducts ~ req:", req)
    

    res.send("asdkjabskdj")
}

const deleteProduct = async (req: Request, res: Response) => {
    console.log("🚀 ~ createProducts ~ req:", req)
    

    res.send("asdkjabskdj")
}


export const productController = {
    getAllProducts,createProduct,getSingleProduct,updateSingleProduct,deleteProduct
}