import ProductModel from "../models/products.model.js";

export default class Product {
  getProducts = async () => {
    try {
      return await ProductModel.find();
    } catch (error) {
      console.log(error);
      return null;
    }
  };

  getProductById = async (id) => {
    try {
      return await ProductModel.findOne({ _id: id });
    } catch (error) {
      console.log(error);
      return null;
    }
  };

  createProduct = async (product) => {
    try {
      return await ProductModel.create(product);
    } catch (error) {
      console.log(error);
      return null;
    }
  };

  updateProduct = async (id, product) => {
    try {
      return await ProductModel.updateOne({ _id: id }, { $set: product });
    } catch (error) {
      console.log(error);
      return null;
    }
  };

  async deleteProduct(id) {
    try {
      return await ProductModel.deleteOne({ _id: id });
    } catch (error) {
      console.log(error);
      return null;
    }
  }
}
