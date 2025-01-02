import "dotenv/config";
import { drizzle } from "drizzle-orm/node-postgres";
import express from "express";
import { logger } from "./log/log";
import { router } from "./routes/userRouter";
const db = drizzle(process.env.DATABASE_URL!);

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/v1", router);
app.listen(3000, () => logger.info("Server listening on localhost:3000"));
