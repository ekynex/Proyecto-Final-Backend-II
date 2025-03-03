import CartsModel from "../models/carts.model.js";
import CartDTO from "../DTOs/cart.dto.js";

export default class Cart {
  getCartByUserId = async (userId) => {
    try {
      const cart = await CartsModel.findOne({ userId }).populate("products.productId");
      return cart ? new CartDTO(cart) : null; 
    } catch (error) {
      console.log(error);
      return null;
    }
  };

  addProductToCart = async (userId, productId, quantity) => {
    try {
      const updatedCart = await CartsModel.findOneAndUpdate(
        { userId },
        { $push: { products: { productId, quantity } } },
        { new: true, upsert: true }
      );
      return new CartDTO(updatedCart);
    } catch (error) {
      console.log(error);
      return null;
    }
  };
}
