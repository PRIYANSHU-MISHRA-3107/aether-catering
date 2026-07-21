import { z } from 'zod'

export const contactSchema = z.object({
  
    name: z.string()
        .trim()
        .min(3, 'name must have atleast 3 characters')
        .max(100, 'name should be under 100 characters'),

    phoneNumber: z.string()
        .trim()
        .min(10, 'phone number must be at least 10 digits')
        .max(15, 'phone number cannot exceed 15 digits'),

    email: z.string()
        .trim()
        .email('invalid email address')
        .transform((email) => email.toLowerCase()),

    inquiryType: z.enum([
        "General Inquiry",
        "Catering Services",
        "Wedding Catering",
        "Corporate Event",
        "Feedback",
    ]),
    
    message: z.string()
        .trim()
        .min(10, 'Message should have at least 10 characters')
        .max(1000, 'Message cannot exceed 1000 characters')
})