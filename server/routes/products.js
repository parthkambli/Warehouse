import { Router } from "express";
import {
  addProduct,
  deleteProduct,
  editProduct,
  getProducts,
  getPrroduct,
} from "../controllers/products.js";

const router = Router();

router.route("/").get(getProducts).post(addProduct);
router.route("/:id").get(getPrroduct).patch(editProduct).delete(deleteProduct);

export default router;
