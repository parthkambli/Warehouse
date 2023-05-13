import { Router } from "express";
import {
  addStandBy,
  deleteStandBy,
  getStandBy,
} from "../controllers/standby.js";

const router = Router();

router.route("/").get(getStandBy).post(addStandBy);
router.route("/:id").delete(deleteStandBy);

export default router;
