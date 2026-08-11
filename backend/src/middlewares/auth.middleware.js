import { getAuth } from "@clerk/express";

const requireAuth = (req, res, next) => {
  try {
    console.log("Authorization header exists:", !!req.headers.authorization);

    const auth = getAuth(req);
    
    if (!auth.isAuthenticated) {
      return res.status(401).json({
        success: false,
        message: "Authentication required.",
      });
    }

    req.userId = auth.userId;

    next();
  } catch (error) {
    console.error("Clerk auth error:", error);
    next(error);
  }
};

export default requireAuth;