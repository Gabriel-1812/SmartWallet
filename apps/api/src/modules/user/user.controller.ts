import { Request, Response } from "express";
import { userService } from "./user.service";
import { createUserSchema } from "./user.schema";

export const createUserController = async (req: Request, res: Response) => {
    const data = createUserSchema.parse(req.body)

    const user = await userService.createUser(data)

    return res.status(201).json(user)
}