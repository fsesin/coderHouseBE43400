export const authMiddleware = (roles) => (req, res, next) => {
  if (roles[0] === "PUBLIC") return next();
  if (!req.user) return res.status(401).json({ message: "Unauthorized" });
  if (!roles.includes(req.user.role))
    return res.status(403).json({ message: "Forbidden" });
  next();
};
