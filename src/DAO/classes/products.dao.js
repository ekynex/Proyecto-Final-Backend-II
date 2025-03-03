import ProductsModel from "../models/products.model.js";

export default class Product {
  getProducts = async () => {
    try {
      return await ProductsModel.find();
    } catch (error) {
      console.log(error);
      return null;
    }
  };

  getProductById = async (id) => {
    try {
      return await ProductsModel.findOne({ _id: id });
    } catch (error) {
      console.log(error);
      return null;
    }
  };

  createProduct = async (product) => {
    try {
      return await ProductsModel.create(product);
    } catch (error) {
      console.log(error);
      return null;
    }
  };

  updateProduct = async (id, product) => {
    try {
      return await ProductsModel.updateOne({ _id: id }, { $set: product });
    } catch (error) {
      console.log(error);
      return null;
    }
  };
}
