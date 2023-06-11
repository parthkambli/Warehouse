import { Router } from "express";
import {
  deletePurchase,
  getPurchases,
  purchaseProduct,
  search,
} from "../controllers/purchase.js";

const router = Router();

router.route("/").get(getPurchases).post(purchaseProduct);
router.route("/:id").delete(deletePurchase);
router.route("/search/:searchKey").get(search);

export default router;
