import { Router } from "express";
import {
  addStandBy,
  deleteStandBy,
  getStandBy,
  search,
} from "../controllers/standby.js";

const router = Router();

router.route("/").get(getStandBy).post(addStandBy);
router.route("/:id").delete(deleteStandBy);
router.route("/search/:searchKey").get(search);

export default router;
