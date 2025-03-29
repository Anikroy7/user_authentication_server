import express from "express";
import validateRequest  from "../../middlewares/validateRequest";

import { AuthValidation } from "../auth/auth.validation";
import { AuthControllers } from "../auth/auth.controller";
import { createUserValidationSchema } from "../user/user.validation";
import { UserControllers } from "../user/user.contoller";
import auth from "../../middlewares/auth";
import { USER_ROLE } from "../user/user.constant";

const router = express.Router();

router.post(
  "/register",
  validateRequest(createUserValidationSchema),
  UserControllers.createUser
);
router.post(
  "/login",
  validateRequest(AuthValidation.loginValidationSchema),
  AuthControllers.loginUser
);

router.post(
  '/refresh-token',
  // validateRequestCookies(AuthValidation.refreshTokenValidationSchema),
  AuthControllers.refreshToken
);

router.get("/me", auth(USER_ROLE.admin, USER_ROLE.user), UserControllers.getUser);


export const AuthRoutes = router;
