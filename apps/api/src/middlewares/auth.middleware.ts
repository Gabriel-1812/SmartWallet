import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

export const authMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({ message: "Acess denied: Token missing" });
  }

  const token = authHeader.split(" ")[1] as string

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET|| "secret");
    (req as any).user = decoded;

    next();

  } catch (err: any) {
    if(err.name==="TokenExpiredError"){
      return res.status(401).json({ message: "Acess denied: Token expired"})
    }
    return res.status(401).json({ message: "Acess denied: Invalid token" });
  }
};