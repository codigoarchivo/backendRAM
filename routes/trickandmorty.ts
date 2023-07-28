import { Router } from "express";
import { getTrickandmortyById } from "../controllers/trickandmorty";

const router = Router();

router.post("/", getTrickandmortyById);

export default router;
