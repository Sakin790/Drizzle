import { status } from "@/controllers/healthCheck";
import { userController } from "@/controllers/userController";
import { Router } from "express";

const router = Router();
router.route("/health").get(status);
router.route("/user").post(userController.createUser);
router.route("/delete").post(userController.deleteAllUser);

export { router };
