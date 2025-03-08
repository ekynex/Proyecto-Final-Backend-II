import mongoose from "mongoose";
import ProductModel from "./products.model.js";

const cartSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  products: [
    {
      productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: ProductModel.modelName,
      },
      quantity: { type: Number, required: true },
    },
  ],
});

const CartModel = mongoose.model("Cart", cartSchema);
export default CartModel;
