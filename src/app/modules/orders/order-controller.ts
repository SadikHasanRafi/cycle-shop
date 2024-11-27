import { Request, Response } from 'express';

const createOrder = async (req: Request, res: Response) => {
  console.log('🚀 ~ createOrder ~ req:', req);
  res.send('zdaikougfawi87uedfgiu8 ');
};


const calculateRevenue = async ( req:Request, res:Response ) => {
    console.log("🚀 ~ calculateRevenue ~ req:", req)

    res.send(21231)

}



export const orderController = {
  createOrder,calculateRevenue
};
