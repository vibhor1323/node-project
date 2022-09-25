import express from "express";
import { signup, login } from "../controllers/userController";
import userAuth from "../middleware/userAuth";

const router = express.router();

router.post("/signup", userAuth.saveUser, signup);

router.post("/login".login);

export default router;
