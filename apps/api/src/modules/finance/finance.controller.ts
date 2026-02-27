import { Request, Response } from "express";

export const getFinancesController = (req:Request, res: Response)=> {
    return res.json({
        message:"Finances protected route working",
        user:(req as any).user
    })
}