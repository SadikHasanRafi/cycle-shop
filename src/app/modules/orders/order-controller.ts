import { Request, Response } from 'express';
import { orderService } from './order-service';
import { IOrder } from './order-interface';

const createOrder = async (req: Request, res: Response) => {
  const result = await orderService.createOrder(req.body as IOrder)

  res.send({
      message:"Order created successfully", success:true , data : result
  })
};
 

const calculateRevenue = async ( req:Request, res:Response ) => {
    const result = await orderService.calculateRevenue()
    res.send({
      message:"Order created successfully", success:true , data : result
  })

}



export const orderController = {
  createOrder,calculateRevenue
};
