import { z } from "zod";

export const createUserValidationSchema = z.object({
  body: z.object({
    password: z.string().max(20),
    name: z.string(),
    email: z.string().email(),
    role: z.string().default('user'),
    status: z.enum(['blocked', 'active']).default('active'),
    isDeleted:z.boolean().default(false)
  }),
});
export const updateUserValidationSchema = z.object({
  body: z.object({
    password: z.string().max(20).optional(),
    name: z.string().optional(),
    email: z.string().email().optional(),
    role: z.string().optional(),
    status: z.enum(['blocked', 'active']).optional(),
    isDeleted: z.boolean().default(false).optional(),
  }),
});

export const UserValidation = {
  createUserValidationSchema,
  updateUserValidationSchema
};
