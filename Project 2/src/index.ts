import "dotenv/config";
import express, { Request, Response } from "express";
import { router } from "./routes/healthRoute";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1", router);

app.listen(3000, () => console.log("Server listening on port 3000"));
