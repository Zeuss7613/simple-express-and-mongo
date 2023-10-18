import express from "express";
import { userRoute } from "./user.js";

const router = express.Router();

// userRoute
router.use("/user",userRoute)

export default router;
