import { Request, Response } from 'express';
import { orderService } from './order-service';

const createOrder = async (req: Request, res: Response) => {
  const result = await orderService.createOrder(req.body)
  console.log("🚀 ~ createOrder ~ result:", result)

  res.send({
      message:"Order created successfully", success:true , data : result
  })
};
 

const calculateRevenue = async ( req:Request, res:Response ) => {
    //console.log("🚀 ~ calculateRevenue ~ req:", req)

    res.send(21231)

}



export const orderController = {
  createOrder,calculateRevenue
};
