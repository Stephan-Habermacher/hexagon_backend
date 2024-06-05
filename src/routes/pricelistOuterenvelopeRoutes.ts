import { Router } from "express";
import { getPricelistOuterenvelope } from "../controllers/pricelistOuterenvelopeController";

const router = Router();

router.get("/", getPricelistOuterenvelope);

export default router;
