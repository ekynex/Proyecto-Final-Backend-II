import { Router } from "express";
import ProductController from "../controllers/product.controller.js"; 
import { authorizeRole } from "../middlewares/auth.middleware.js";

const router = Router();
const productController = new ProductController();

router.get("/", productController.getAllProducts);
router.get("/:id", productController.getProductById);
router.post("/", authorizeRole(["admin"]), productController.createProduct);
router.put("/:id", authorizeRole(["admin"]), productController.updateProduct);
router.delete("/:id", authorizeRole(["admin"]), productController.deleteProduct);

export default router;
