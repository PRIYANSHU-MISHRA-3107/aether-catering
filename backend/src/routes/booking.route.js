import express from "express";

import {
  bookingSchema,
  updateBookingStatusSchema,
  updateBookingSchema,
} from "../validators/booking.validator.js";

import validate from "../middlewares/validate.js";
import requireAuth from "../middlewares/auth.middleware.js";
import requireRole from "../middlewares/requireRole.js";

import {
  createBooking,
  getAllBookings,
  getBookingById,
  updateBooking,
  deleteBooking,
  getBookingStats,
  getrecentBooking,
  getPendingBooking,
  updateBookingStatus,
} from "../controllers/booking.controller.js";

const router = express.Router();

// Create booking - Public
router.post(
  "/booking",
  validate(bookingSchema),
  createBooking
);

// Get bookings - Admin only
router.get(
  "/bookings",
  requireAuth,
  requireRole(["admin"]),
  getAllBookings
);

router.get(
  "/booking/stats",
  requireAuth,
  requireRole(["admin"]),
  getBookingStats
);

router.get(
  "/booking/recent",
  requireAuth,
  requireRole(["admin"]),
  getrecentBooking
);

router.get(
  "/booking/pending",
  requireAuth,
  requireRole(["admin"]),
  getPendingBooking
);

router.get(
  "/booking/:id",
  requireAuth,
  requireRole(["admin"]),
  getBookingById
);

// Update booking status - Admin only
router.patch(
  "/booking/:id/status",
  requireAuth,
  requireRole(["admin"]),
  validate(updateBookingStatusSchema),
  updateBookingStatus
);

// Update booking - Admin only
router.patch(
  "/booking/:id",
  requireAuth,
  requireRole(["admin"]),
  validate(updateBookingSchema),
  updateBooking
);

// Delete booking - Admin only
router.delete(
  "/booking/:id",
  requireAuth,
  requireRole(["admin"]),
  deleteBooking
);

export default router;