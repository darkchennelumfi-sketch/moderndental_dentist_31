import { z } from "zod";

const phonePattern = /^[0-9+()\-.\s]{7,50}$/;

export const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Please tell us your name.")
    .max(100, "Please keep your name under 100 characters."),
  email: z
    .string()
    .trim()
    .min(1, "An email address is required.")
    .email("Please enter a valid email address.")
    .max(250, "Please keep your email under 250 characters."),
  phone: z
    .string()
    .trim()
    .min(7, "Please enter a phone number.")
    .max(50, "Please keep your phone number under 50 characters.")
    .regex(phonePattern, "Please use only numbers, spaces, and + ( ) - ."),
  subject: z
    .string()
    .trim()
    .min(2, "Please add a subject.")
    .max(120, "Please keep the subject under 120 characters."),
  message: z
    .string()
    .trim()
    .min(10, "Please share a little more detail.")
    .max(2000, "Please keep your message under 2,000 characters."),
});

export type ContactInput = z.infer<typeof contactSchema>;

export const steps = [
  { id: "details", label: "Your details", fields: ["name", "email", "phone"] },
  { id: "message", label: "Your message", fields: ["subject", "message"] },
] as const satisfies readonly {
  id: string;
  label: string;
  fields: readonly (keyof ContactInput)[];
}[];
