import { z } from "zod";

export const intakeSchema = z.object({
  fullName: z.string().min(2, "Please enter your full name."),
  phone: z.string().regex(/^(?:\+1\s?)?(?:\([2-9]\d{2}\)|[2-9]\d{2})[-.\s]?\d{3}[-.\s]?\d{4}$/, "Enter a valid US phone number."),
  email: z.string().email("Enter a valid business email."),
  company: z.string().min(2, "Company name is required."),
  mcDot: z.string().optional(),
  equipment: z.preprocess(value => value === "" ? undefined : value, z.enum(["Reefer 53'", "Flatbed", "Step Deck", "Dry Van 53'", "Power Only"]).optional()),
  trucks: z.preprocess(value => value === "" ? undefined : value, z.enum(["1", "2-5", "5+"]).optional()),
  region: z.preprocess(value => value === "" ? undefined : value, z.enum(["West Coast", "Midwest", "Nationwide OTR", "All Across USA"]).optional()),
  consent: z.literal(true, { errorMap: () => ({ message: "Consent is required to submit." }) })
});
export type IntakeData = z.infer<typeof intakeSchema>;
