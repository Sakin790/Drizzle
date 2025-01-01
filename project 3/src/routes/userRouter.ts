import { userController } from "@/controllers/userControllers";
import { Router } from "express";

const router = Router();
router.route("/health").get(userController.status);
export { router };
