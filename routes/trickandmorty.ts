import { Router } from "express";
import { postTrickandmorty } from "../controllers/trickandmorty";

const router = Router();

router.post("/", postTrickandmorty);

export default router;
