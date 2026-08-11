import { z } from "zod";

export const bookingSchema = z.object({
  customerName: z.string().trim().min(1),
  email: z.string().trim().email(),
  phoneNumber: z
    .string()
    .trim()
    .regex(/^\+?[0-9]{10,15}$/, "Invalid phone number"),

  eventType: z.string().min(1),
  eventDate: z.coerce.date(),
  timeSlot: z.string().min(1),

  guestCount: z
    .number()
    .int()
    .min(10, "Minimum 10 guests required"),

  venue: z.string().trim().min(1),
  dietaryPreference: z.string().min(1),
  packageId: z.string().min(1),

  starterDishes: z.array(z.string()).default([]),
  mainCourseDishes: z.array(z.string()).default([]),
  dessertDishes: z.array(z.string()).default([]),
  beverageDishes: z.array(z.string()).default([]),
  extras: z.array(z.string()).default([]),

  specialInstructions: z.string().optional(),

  status: z
    .enum(["Pending", "Confirmed", "Cancelled", "Completed"])
    .default("Pending"),
});


// Status update validation
export const updateBookingStatusSchema = z.object({
  status: z.enum([
    "Pending",
    "Confirmed",
    "Cancelled",
    "Completed",
  ]),
});


// General booking update validation
export const updateBookingSchema = bookingSchema.partial();