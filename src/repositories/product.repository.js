import ProductDAO from "../DAO/classes/products.dao.js";

export default class ProductRepository {
  constructor() {
    this.productDAO = new ProductDAO();
  }

  async getProducts() {
    return await this.productDAO.getProducts();
  }

  async getProductById(id) {
    return await this.productDAO.getProductById(id);
  }

  async createProduct(productData) {
    return await this.productDAO.createProduct(productData);
  }

  async updateProduct(id, productData) {
    return await this.productDAO.updateProduct(id, productData);
  }
}
