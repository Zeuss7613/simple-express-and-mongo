import express from "express";
import { userRoute } from "./user.js";
import { demoPage } from "./hello.js";

const router = express.Router();

// userRoute
router.use("/user", userRoute);

// helloPage
router.use("/hello", demoPage);

export default router;
