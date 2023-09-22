import { Router } from "express";
import {
  addProduct,
  deleteProduct,
  editProduct,
  getProducts,
  getPrroduct,
  getQtyProduct,
  getSpareProduct,
  search,
} from "../controllers/products.js";

const router = Router();

router.route("/").post(addProduct);
router.route("/all").get(getProducts);
router.route("/qty").get(getQtyProduct);
router.route("/spare").get(getSpareProduct);
router.route("/:id").get(getPrroduct).patch(editProduct).delete(deleteProduct);
router.route("/search/:searchKey").get(search);

export default router;
