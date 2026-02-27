import { Router, type Router as ExpressRouter } from 'express';
import { authMiddleware } from "../../middlewares/auth.middleware";
import { getFinancesController } from "./finance.controller";

const financeRoutes: ExpressRouter = Router();

financeRoutes.get("/", authMiddleware, getFinancesController);

export { financeRoutes };