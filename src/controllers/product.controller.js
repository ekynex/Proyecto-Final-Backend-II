import ProductRepository from "../repositories/product.repository.js";

const productRepository = new ProductRepository(); 

export default class ProductController {
  async getAllProducts(req, res) {
    try {
      const products = await productRepository.getAll();
      res.json(products);
    } catch (error) {
      res.status(500).json({ message: "Error al obtener productos" });
    }
  }

  async getProductById(req, res) {
    try {
      const { id } = req.params;
      const product = await productRepository.getById(id);
      if (!product) {
        return res.status(404).json({ message: "Producto no encontrado" });
      }
      res.json(product);
    } catch (error) {
      res.status(500).json({ message: "Error al obtener el producto" });
    }
  }

  async createProduct(req, res) {
    try {
      const newProduct = await productRepository.create(req.body);
      res.status(201).json(newProduct);
    } catch (error) {
      res.status(500).json({ message: "Error al crear producto" });
    }
  }

  async updateProduct(req, res) {
    try {
      const { id } = req.params;
      const updatedProduct = await productRepository.update(id, req.body);
      res.json(updatedProduct);
    } catch (error) {
      res.status(500).json({ message: "Error al actualizar producto" });
    }
  }

  async deleteProduct(req, res) {
    try {
      const { id } = req.params;
      await productRepository.delete(id);
      res.json({ message: "Producto eliminado correctamente" });
    } catch (error) {
      res.status(500).json({ message: "Error al eliminar producto" });
    }
  }
}
