import mongoose from "mongoose";
import CartDAO from "../DAO/classes/carts.dao.js";
import CartModel from "../DAO/models/carts.model.js";

export default class CartRepository {
  constructor() {
    this.cartDAO = new CartDAO();
  }

  async createCart(userId) {
    try {
      const newCart = new CartModel({ userId, products: [] });
      await newCart.save();
      return newCart;
    } catch (error) {
      console.error("Error al crear carrito:", error);
      return null;
    }
  }

  async getCartByUserId(cartId) {
    try {
      const cart = await CartModel.findOne({
        _id: new mongoose.Types.ObjectId(cartId),
      }).populate("products.productId");
      return cart;
    } catch (error) {
      console.error("Error al obtener carrito por ID:", error);
      return null;
    }
  }

  async addProductToCart(userId, productId, quantity) {
    return await this.cartDAO.addProductToCart(userId, productId, quantity);
  }
}
