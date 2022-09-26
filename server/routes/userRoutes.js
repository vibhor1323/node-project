import express from "express";
import { signup, login } from "../controllers/userController.js";
import userAuth from "../middleware/userAuth.js";

const router = express.Router();

router.post("/signup", userAuth.saveUser, signup);

router.post("/login", login);

export default router;
