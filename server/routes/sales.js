import { Router } from "express";
import {
  deleteSale,
  getSales,
  saleProduct,
  search,
} from "../controllers/sales.js";

const router = Router();

router.route("/").get(getSales).post(saleProduct);
router.route("/:id").delete(deleteSale);
router.route("/search/:searchKey").get(search);

export default router;
