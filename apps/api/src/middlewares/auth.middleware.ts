import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

export const authMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({ message: "Token missing" });
  }

  const parts = authHeader.split(" ");

  if (parts.length < 2) {
    return res.status(401).json({ message: "Token error" });
  }

  const token= parts[1] as string;

  try {
    const decoded = jwt.verify(token, "secret");
    (req as any).user = decoded;

    return next();
  } catch {
    return res.status(401).json({ message: "Invalid token" });
  }
};