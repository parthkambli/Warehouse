import { Router } from "express";
import {
  deletePurchase,
  getPurchases,
  purchaseProduct,
} from "../controllers/purchase.js";

const router = Router();

router.route("/").get(getPurchases).post(purchaseProduct);
router.route("/:id").delete(deletePurchase);

export default router;
