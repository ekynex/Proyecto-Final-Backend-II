import { Schema, model } from "mongoose";

const ProductSchema = new Schema({
  name: String,
  description: String,
  price: Number,
  stock: Number,
  category: String,
});

export default model("Products", ProductSchema);
