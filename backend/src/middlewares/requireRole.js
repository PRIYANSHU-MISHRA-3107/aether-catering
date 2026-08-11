import { getAuth } from "@clerk/express";

const requireRole = (allowedRoles) => {
  return (req, res, next) => {
    const { sessionClaims } = getAuth(req);

    const role = sessionClaims?.metadata?.role;

    if (!role || !allowedRoles.includes(role)) {
      return res.status(403).json({
        success: false,
        message: "Forbidden. You do not have permission.",
      });
    }

    req.userRole = role;

    next();
  };
};

export default requireRole;