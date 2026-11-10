import express from "express";
import serviceRoutes from "./routes/service.routes.js";

const app = express();

app.use(express.json());
app.use("/services", serviceRoutes);

export default app;
