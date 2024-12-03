import mongoose, { Model, Schema } from "mongoose";
import IOder, { IOrderModel } from "./order-interface";


type  OrderModel = Model<IOder, object, IOrderModel>;

const orderSchema = new Schema<IOder,OrderModel, IOrderModel>({
    email: { type: String, required: true },
    product: { type: Schema.Types.ObjectId, ref: 'Bicycle', required: true },  // Reference to Bicycle model
    quantity: { type: Number, required: true },
    totalPrice: { type: Number, required: true }
  }, { versionKey: false }
);

orderSchema.method('isAvailable', async function () {
  console.log(this.product)
  // const result = await orderSchema.
})



export const Order = mongoose.model('Order', orderSchema);
