import { Router } from "express";

import captureUserController from "../controllers/captureUser.controller";
import createUserController from "../controllers/createUser.controller";
import deleteUserController from "../controllers/deleteUser.controller";
import listUsersController from "../controllers/listUsers.controller";
import updateUserController from "../controllers/updateUser.controller";

import verifyEmailMiddleware from "../middlewares/verifyEmail.middleware";
import verifyFieldsMiddleware from "../middlewares/verifyFields.middleware";
import verifyIdMiddleware from "../middlewares/verifyId.middleware";


const router = Router();

router.post("", verifyFieldsMiddleware , verifyEmailMiddleware, createUserController)
router.get("", listUsersController)
router.get("/:id", verifyIdMiddleware, captureUserController)
router.delete("/:id", verifyIdMiddleware, deleteUserController)
router.patch("/:id", verifyIdMiddleware, updateUserController)

export default router