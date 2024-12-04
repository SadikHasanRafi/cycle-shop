import mongoose, { Model, Schema } from "mongoose";
import { IOrder, IOrderModel } from "./order-interface";


type  OrderModel = Model<IOrder, object, IOrderModel>;

const orderSchema = new Schema<IOrder,OrderModel, IOrderModel>({
    email: { type: String, required: true },
    product: { type: Schema.Types.ObjectId, ref: 'Bicycle', required: true },  // Reference to Bicycle model
    quantity: { type: Number, required: true },
    totalPrice: { type: Number, required: true }
  }, { versionKey: false }
);




export const Order = mongoose.model('Order', orderSchema);
