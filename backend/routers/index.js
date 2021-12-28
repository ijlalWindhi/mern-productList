import express from "express";
import {
  getAllProducts,
  createProduct,
  getProductsById,
  updateProduct,
  deletedProduct,
} from "../controller/products.js";

const router = express.Router();

router.get("/", getAllProducts);
router.get("/:id", getProductsById);
router.post("/", createProduct);
router.patch("/:id", updateProduct);
router.delete("/:id", deletedProduct);

export default router;
