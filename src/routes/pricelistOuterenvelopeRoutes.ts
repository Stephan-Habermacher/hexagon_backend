import { Router } from "express";
import {
  getPricelistOuterenvelope,
  postPricelistOuterenvelope,
} from "../controllers/pricelistOuterenvelopeController";

const router = Router();

router.get("/", getPricelistOuterenvelope);
router.post("/", postPricelistOuterenvelope);

export default router;
