import { z } from "zod";


export const createPaymentValidationSchema = z.object({
    body: z.object({
        userId: z.string(),
        paymentStatus: z.enum(["Pending", "Paid", "Failed"]).default("Pending"),
        transactionId: z.string().min(1, "Transaction ID is required").max(255, "Transaction ID is too long"),
        totalPrice: z.number().positive("Total price must be greater than 0"),
    }),
});
