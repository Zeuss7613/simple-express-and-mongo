import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
    res.send("Hello World v2")
});

export const userRoute = router;
