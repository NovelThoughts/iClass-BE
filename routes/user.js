import express from "express";
import { login } from "../controllers/user.js";

const router = express.Router();

// TODO: Add Auth Validator Middleware
router.get("/login", login);

export default router;
