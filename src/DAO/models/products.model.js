import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name: { type: String, required: true },
    price: { type: Number, required: true },
    stock: { type: Number, required: true }
});

const ProductModel = mongoose.model("Product", productSchema);
export default ProductModel;
