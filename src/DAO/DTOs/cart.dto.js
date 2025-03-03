export default class CartDTO {
    constructor(cart) {
      this.id = cart._id;
      this.userId = cart.userId;
      this.products = cart.products.map(p => ({
        productId: p.productId,
        quantity: p.quantity
      }));
    }
  }
  