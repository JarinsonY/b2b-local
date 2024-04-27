// Zod
import { z } from "zod";

// Login Schema
export const signInSchema = z.object({
    email: z.string().email({
        message: "Schema.Email",
    }),
    password: z.string({
        message: "Schema.Password",
    }),
});

export type TSignInSchema = z.infer<typeof signInSchema>;

// Register Schema
export const signUpSchema = z.object({
    business: z.string({
        message: "Schema.Business",
    }),
    country: z.array(z.string(), {
        message: "Schema.Country",
    }),
    email: z.string().email({
        message: "Schema.Email",
    }),
    fullName: z.string({
        message: "Schema.FullName",
    }),
    phoneNumber: z.string({
        message: "Schema.PhoneNumber",
    }),
    password: z.string({
        message: "Schema.Password",
    }),
});

export type TSignUpSchema = z.infer<typeof signUpSchema>;
