import mongoose, { Model, Schema } from "mongoose";
import IOder, { IOrderModel } from "./order-interface";
import { Product } from "../products/products-model";


type  OrderModel = Model<IOder, object, IOrderModel>;

const orderSchema = new Schema<IOder,OrderModel, IOrderModel>({
    email: { type: String, required: true },
    product: { type: Schema.Types.ObjectId, ref: 'Bicycle', required: true },  // Reference to Bicycle model
    quantity: { type: Number, required: true },
    totalPrice: { type: Number, required: true }
  }, { versionKey: false }
);

orderSchema.method('isAvailable', async function () {
  console.log("🚀 ~ this:", this)
  const product = new Product(this)
const objectId = {_id:(this.product).toString()}
  const result = await product.findById(objectId);
  // console.log("🚀 ~ (this.product).toString():", (this.product).toString())
  return result
})



export const Order = mongoose.model('Order', orderSchema);
