import { Router } from "express";
import { getOuterenvelopes } from "../controllers/outerenvelopeController";

const router = Router();

router.get("/", getOuterenvelopes);

export default router;
