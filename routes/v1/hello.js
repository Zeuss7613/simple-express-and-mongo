import express from "express";
import config from "../../config.js"

const router = express.Router();

router.get("/",(req,res) => {
    res.send(`This is demo page. Now try go to <a href="http://localhost:${config.port}/api/v1/user">User Route</a>`)
})

export const demoPage = router;
