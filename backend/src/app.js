import express from "express";
import cors from "cors";
import helmet from "helmet";
import { clerkMiddleware } from "@clerk/express";

import HealthCheakRoute from "./routes/health.route.js";
import contactRouter from "./routes/contact.route.js";
import bookingRouter from "./routes/booking.route.js";

import errorHandler from "./middlewares/errorHandler.js";

const app = express();

// Security headers
app.use(helmet());

// CORS
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

// Request body parsing
app.use(express.json({ limit: "10kb" }));

// Clerk
app.use(clerkMiddleware());

// Routes
app.use("/api/v1", HealthCheakRoute);
app.use("/api/v1", contactRouter);
app.use("/api/v1", bookingRouter);

// 404 handler
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "Route not found.",
  });
});

// Global error handler
app.use(errorHandler);

export default app;