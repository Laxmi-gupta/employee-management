import express from "express";
import { createEmployee, getEmployees } from "../controllers/employee.controller.js";
import {authMiddleware} from "../middleware/auth.middleware.js";
import upload from "../middleware/upload.middleware.js";

const router = express.Router();

router.post("/",authMiddleware, upload.single("photo"), createEmployee);
router.get("/", authMiddleware, getEmployees);

export default router;