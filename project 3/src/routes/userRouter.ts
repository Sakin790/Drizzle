import { userController } from "@/controllers/userControllers";
import { Router } from "express";

const router = Router();
router.route("/health").get(userController.status);
router.route("/create-user").post(userController.createUser);
router.route("/users").get(userController.findAll);
export { router };
