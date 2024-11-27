import mongoose, { Schema } from "mongoose";
import IOder from "./order-interface";

const orderSchema = new Schema<IOder>({
    email: { type: String, required: true },
    product: { type: Schema.Types.ObjectId, ref: 'Bicycle', required: true },  // Reference to Bicycle model
    quantity: { type: Number, required: true },
    totalPrice: { type: Number, required: true }
  });


export const OrderModel = mongoose.model('Order', orderSchema);
