import express from "express";
import cors from "cors";
import helmet from "helmet";
import { clerkMiddleware } from "@clerk/express";
import morgan from "morgan";

import HealthCheakRoute from "./routes/health.route.js";
import contactRouter from "./routes/contact.route.js";
import bookingRouter from "./routes/booking.route.js";

import errorHandler from "./middlewares/errorHandler.js";

const app = express();

// ─────────────────────────────────────────────
// Security
// ─────────────────────────────────────────────
app.use(helmet());

// ─────────────────────────────────────────────
// CORS
// ─────────────────────────────────────────────

const allowedOrigins = [
  "http://localhost:3000",
  process.env.FRONTEND_URL,
].filter(Boolean);

app.use(
  cors({
    origin: (origin, callback) => {
      // Allow requests without an Origin header
      // such as Postman/server-to-server requests.
      if (!origin) {
        return callback(null, true);
      }

      if (allowedOrigins.includes(origin)) {
        return callback(null, true);
      }

      return callback(new Error("Not allowed by CORS"));
    },
    credentials: true,
  })
);

// ─────────────────────────────────────────────
// Body Parsing
// ─────────────────────────────────────────────
app.use(express.json({ limit: "10kb" }));

// ─────────────────────────────────────────────
// Logging
// ─────────────────────────────────────────────
app.use(morgan("dev"));

// ─────────────────────────────────────────────
// Clerk
// ─────────────────────────────────────────────
app.use(clerkMiddleware());

// ─────────────────────────────────────────────
// Routes
// ─────────────────────────────────────────────
app.use("/api/v1", HealthCheakRoute);
app.use("/api/v1", contactRouter);
app.use("/api/v1", bookingRouter);

// ─────────────────────────────────────────────
// 404 Handler
// ─────────────────────────────────────────────
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "Route not found.",
  });
});

// ─────────────────────────────────────────────
// Global Error Handler
// ─────────────────────────────────────────────
app.use(errorHandler);

export default app;