import { todoController } from "@/controllers/todoController";
import { userController } from "@/controllers/userController";
import { Router } from "express";

const router = Router();

router.route("/health").get(userController.status);
router.route("/create-user").post(userController.createUser);
router.route("/create-todo").post(todoController.createtodo);
router.route("/get").get(todoController.getAll);

export { router };
