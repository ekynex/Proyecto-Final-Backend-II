import { Schema, model, SchemaTypes } from "mongoose";

const CartSchema = new Schema({
  userId: { type: SchemaTypes.ObjectId, ref: "Users", required: true },
  products: [
    {
      productId: { type: SchemaTypes.ObjectId, ref: "Products", required: true },
      quantity: Number,
    },
  ],
});

export default model("Carts", CartSchema);
