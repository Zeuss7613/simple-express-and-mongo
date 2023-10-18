import express from "express";
import v1Route from "./routes/v1/index.js";
import v2Route from "./routes/v2/index.js";

const app = express();

app.use("/api/v1", v1Route); // Route v1
app.use("/api/v2", v2Route); // Route v2

export default app;
