import CartDAO from "../DAO/classes/carts.dao.js";

export default class CartRepository {
  constructor() {
    this.cartDAO = new CartDAO();
  }

  async getCartByUserId(userId) {
    return await this.cartDAO.getCartByUserId(userId);
  }

  async addProductToCart(userId, productId, quantity) {
    return await this.cartDAO.addProductToCart(userId, productId, quantity);
  }
}
