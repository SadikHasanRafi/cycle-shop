import { ObjectId } from "mongoose";

export default interface IProduct {
  [x: string]: unknown | ObjectId;
  name: string;
  brand: string;
  price: number;
  type: string
  description: string;
  quantity: number;
  inStock: boolean;
  createdAt?: string;
  updatedAt?: string;
}

export interface IProductModel  {
  duplicateCheck(): boolean;
}


