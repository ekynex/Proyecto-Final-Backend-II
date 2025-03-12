import CartRepository from "../repositories/cart.repository.js";

class CartController {
  constructor() {
    this.cartRepository = new CartRepository();
  }
  async createCart(req, res) {
    try {
      console.log("Datos recibidos:", req.body);
      const { userId } = req.body;
      const newCart = await this.cartRepository.createCart(userId);
      res.status(201).json(newCart);
    } catch (error) {
      res.status(500).json({ message: "Error al crear carrito" });
    }
  }

  async getCartByUserId(req, res) {
    try {
      const cart = await this.cartRepository.getCartByUserId(req.params.id);
      if (!cart)
        return res.status(404).json({ message: "Carrito no encontrado" });
      res.json(cart);
    } catch (error) {
      res.status(500).json({ error: "Error al obtener el carrito" });
    }
  }

  async addProductToCart(req, res) {
    try {
      const { userId, productId, quantity } = req.body;
      const updatedCart = await this.cartRepository.addProductToCart(
        userId,
        productId,
        quantity
      );
      res.json(updatedCart);
    } catch (error) {
      res.status(500).json({ error: "Error al agregar producto al carrito" });
    }
  }
}

export default CartController;
