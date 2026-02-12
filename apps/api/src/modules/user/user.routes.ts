import { Router, type Router as ExpressRouter } from 'express';
import { createUserController, listUsersController, getUserByIdController } from './user.controller';

const userRoutes: ExpressRouter = Router();

userRoutes.post('/', createUserController)
userRoutes.get('/', listUsersController)
userRoutes.get('/:id', getUserByIdController)

export { userRoutes };
