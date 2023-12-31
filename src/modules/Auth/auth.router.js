import { Router } from "express";
import { auth } from "../../middleware/auth.js";
import { validation } from "../../middleware/validation.js";
import * as validators from "../Auth/auth.validation.js";
import * as authController from "../Auth/controller/auth.js";
import { endPoint } from "./auth.endPoint.js";

const router = Router();

router.post("/signup", validation(validators.signup), authController.signUp);

router.get(
  "/confirmEmail/:token",
  validation(validators.token),
  authController.confirmEmail
);

router.get(
  "/newConfirmEmail/:token",
  validation(validators.token),
  authController.newConfirmEmail
);

router.post("/login", validation(validators.login), authController.login);

router.patch(
  "/sendCode",
  validation(validators.sendCode),
  authController.sendCode
);

router.patch(
  "/forgetPassword",
  validation(validators.forgetPassword),
  authController.forgetPassword
);

router.patch("/logout", auth(endPoint.logout), authController.logOut);

router.post("/social", authController.socialAuth);

export default router;
