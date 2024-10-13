import express from "express";
import { createProduct, getAllProducts, getProductById, updateProductById, deleteProductById, getProductHistroy } from "../controllers/product_controller.js";
import { isAuthenticated } from "../middlewares/user_auth.js";

const productRouter = express.Router();
productRouter.post("/", isAuthenticated, createProduct);
productRouter.get("/", getAllProducts);
productRouter.get("/:id", getProductById);
productRouter.get("/:id/history", getProductHistroy);
productRouter.put("/:id", isAuthenticated, updateProductById);
productRouter.delete("/:id", isAuthenticated, deleteProductById);

export default productRouter;
