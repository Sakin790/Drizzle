import "dotenv/config";
import express, { Request, Response } from "express";
import { router } from "./routes/userRouter";
import { logger } from "./logger";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1", router);

app.listen(3000, () => logger.info("Server listening on localhost:3000"));
