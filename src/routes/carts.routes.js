import { Router } from "express";
import CartController from "../controllers/cart.controller.js";
import { authorizeRole } from "../middlewares/auth.middleware.js";

const router = Router();
const cartController = new CartController();

router.get("/:id", cartController.getCartByUserId.bind(cartController));
router.post("/:id/product", authorizeRole(["user"]), cartController.addProductToCart.bind(cartController));

export default router;
