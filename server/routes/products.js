import { Router } from "express";
import {
  addProduct,
  deleteProduct,
  editProduct,
  getProducts,
  getPrroduct,
  search,
} from "../controllers/products.js";

const router = Router();

router.route("/").get(getProducts).post(addProduct);
router.route("/:id").get(getPrroduct).patch(editProduct).delete(deleteProduct);
router.route("/search/:searchKey").get(search);

export default router;
