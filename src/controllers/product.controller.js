import ProductRepository from "../repositories/product.repository.js";

const productRepository = new ProductRepository(); 

export default class ProductController {
  async getAllProducts(req, res) {
    try {
      const products = await productRepository.getProducts();
      res.json(products);
    } catch (error) {
      res.status(500).json({ message: "Error al obtener productos" });
    }
  }

  async getProductById(req, res) {
    try {
      const { id } = req.params;
      const product = await productRepository.getProductById(id);
      if (!product) {
        return res.status(404).json({ message: "Producto no encontrado" });
      }
      res.json(product);
    } catch (error) {
      res.status(500).json({ message: "Error al obtener el producto" });
    }
  }

  async createProduct(req, res) {
    console.log("Datos recibidos:", req.body);
    try {
      const newProduct = await productRepository.createProduct(req.body);
      res.status(201).json(newProduct);
      console.log("Datos recibidos:", req.body);
    } catch (error) {
      console.error("Error al crear producto:", error);
      res.status(500).json({ message: "Error al crear producto" });
    }
  }

  async updateProduct(req, res) {
    try {
      const { id } = req.params;
      const updatedProduct = await productRepository.updateProduct(id, req.body);
      res.json(updatedProduct);
    } catch (error) {
      res.status(500).json({ message: "Error al actualizar producto" });
    }
  }

  async deleteProduct(req, res) {
    try {
      const { id } = req.params;
      await productRepository.deleteProduct(id);
      res.json({ message: "Producto eliminado correctamente" });
    } catch (error) {
      res.status(500).json({ message: "Error al eliminar producto" });
    }
  }
}
