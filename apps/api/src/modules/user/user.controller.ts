import { Request, Response } from "express";
import { userService } from "./user.service";
import { createUserSchema } from "./user.schema";

export const createUserController = async (req: Request, res: Response) => {
    const data = createUserSchema.parse(req.body)
    const user = await userService.createUser(data)
    return res.status(201).json(user)
}
export const listUsersController = async (_req: Request, res:Response) => {
    const users = await userService.listUsers()
    return res.json(users)
}

export const getUserByIdController = async (req: Request, res: Response) => {
    console.log("BATEU NA ROTA GET/users/:id")
      const id = req.params.id as string;

    if (!id) {
        return res.status(400).json({message: 'Id is required'})
    }
    const user = await userService.getUserById(id)

    if (!user) {
        return res.status(404).json({message:'User not found'})
    }

    return res.json(user)
}