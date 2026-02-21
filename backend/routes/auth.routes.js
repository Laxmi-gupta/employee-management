import { Router } from "express";
import { checkAuth, login, logout } from "../controllers/auth.controller.js";
import { authMiddleware } from "../middleware/auth.middleware.js";

const router = Router();

router.post("/login",login);
router.post("/logout",logout);
router.get("/check", authMiddleware, checkAuth);

export default router;
