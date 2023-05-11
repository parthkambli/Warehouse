import { Router } from "express";
import { deleteSale, getSales, saleProduct } from "../controllers/sales.js";

const router = Router();

router.route("/").get(getSales).post(saleProduct);
router.route("/:id").delete(deleteSale);

export default router;
