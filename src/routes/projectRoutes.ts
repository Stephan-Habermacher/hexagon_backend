import { Router } from "express";
import { getProject, postProject } from "../controllers/projectController";

const router = Router();

router.get("/:id", getProject);
router.post("/", postProject);

export default router;
