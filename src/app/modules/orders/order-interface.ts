import { ObjectId } from "mongoose"

export default interface IOder {
    email:string
    product:ObjectId
    quantity:number
    totalPrice:number
}

export interface IOrderModel {
    isAvailable():boolean;
}