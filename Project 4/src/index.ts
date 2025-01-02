import "dotenv/config";
import { drizzle } from "drizzle-orm/node-postgres";
import { eq } from "drizzle-orm";
import { usersTable } from "./db/schema";
import express from "express";
import { logger } from "./log/log";
const db = drizzle(process.env.DATABASE_URL!);

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(3000, () => logger.info("Server listening on localhost:3000"));
