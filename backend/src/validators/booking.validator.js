import { z } from "zod";

// Create Booking
export const bookingSchema = z.object({
  // Customer information
  customerName: z
    .string()
    .trim()
    .min(1, "Customer name is required"),

  email: z
    .string()
    .trim()
    .email("Invalid email address"),

  phoneNumber: z
    .string()
    .trim()
    .regex(
      /^\+?[0-9]{10,15}$/,
      "Invalid phone number"
    ),

  // Event information
  eventType: z
    .string()
    .trim()
    .min(1, "Event type is required"),

  eventDate: z.coerce.date(),

  timeSlot: z
    .string()
    .trim()
    .min(1, "Time slot is required"),

  venue: z
    .string()
    .trim()
    .min(1, "Venue is required"),

  // Guest information
  guestCount: z
    .number()
    .int()
    .min(10, "Minimum 10 guests required"),

  dietaryPreference: z
    .string()
    .trim()
    .min(1, "Dietary preference is required"),

  // Package
  packageId: z
    .string()
    .trim()
    .min(1, "Package is required"),

  // Menu selections
  starterDishes: z
    .array(z.string())
    .default([]),

  mainCourseDishes: z
    .array(z.string())
    .default([]),

  dessertDishes: z
    .array(z.string())
    .default([]),

  beverageDishes: z
    .array(z.string())
    .default([]),

  extras: z
    .array(z.string())
    .default([]),

  // Optional
  specialInstructions: z
    .string()
    .trim()
    .optional(),

  // Booking status
  status: z
    .enum([
      "Pending",
      "Confirmed",
      "Cancelled",
      "Completed",
    ])
    .default("Pending"),
});

// Update booking status
export const updateBookingStatusSchema = z.object({
  status: z.enum([
    "Pending",
    "Confirmed",
    "Cancelled",
    "Completed",
  ]),
});

// General booking update
export const updateBookingSchema = bookingSchema.partial();