import { Router, type Router as ExpressRouter } from 'express';
import { createUserController } from './user.controller';

const userRoutes: ExpressRouter = Router();

userRoutes.post('/', createUserController)

export { userRoutes };
