import { Request, Response } from "express";
import { loginSchema } from "./auth.schema";
import { authService } from "./auth.service";

export const loginController = async (req: Request, res: Response) => {
    const data = loginSchema.parse(req.body)

    const result = await authService.login(data.email,data.password)

    return res.json(result)
}