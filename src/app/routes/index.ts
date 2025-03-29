import { Router } from "express";
import { AuthRoutes } from "../modules/auth/auth.route";
import { PaymentRoutes } from "../modules/payment/payment.route";

const router = Router();

const moduleRoutes = [
  {
    path: "/auth",
    route: AuthRoutes,
  },
  {
    path: "/payments",
    route: PaymentRoutes,
  },

];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
