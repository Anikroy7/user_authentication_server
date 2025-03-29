import express from "express";
import validateRequest  from "../../middlewares/validateRequest";
import { createPaymentValidationSchema } from "./payment.valiation";
import { PaymentControllers } from "./payment.controller";


const router = express.Router();

router.post(
  "/checkout",
  validateRequest(createPaymentValidationSchema),
  PaymentControllers.createPayment
);


router.post(
  "/confirm", PaymentControllers.confirmPayment,
);
router.post(
  "/failed", PaymentControllers.failedPayment,
);


export const PaymentRoutes = router;
