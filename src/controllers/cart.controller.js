import CartRepository from "../repositories/cart.repository.js";

class CartController {
  constructor() {
    this.cartRepository = new CartRepository();
  }

  async getCartByUserId(req, res) {
    try {
      const cart = await this.cartRepository.getCartByUserId(req.params.userId);
      if (!cart) return res.status(404).json({ message: "Carrito no encontrado" });
      res.json(cart);
    } catch (error) {
      res.status(500).json({ error: "Error al obtener el carrito" });
    }
  }

  async addProductToCart(req, res) {
    try {
      const { userId, productId, quantity } = req.body;
      const updatedCart = await this.cartRepository.addProductToCart(userId, productId, quantity);
      res.json(updatedCart);
    } catch (error) {
      res.status(500).json({ error: "Error al agregar producto al carrito" });
    }
  }
}

export default CartController;
