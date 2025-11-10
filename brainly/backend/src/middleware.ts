import type { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";

interface JwtPayload {
    id: string
}

export const userMiddleware = (req: Request, res: Response, next: NextFunction) =>{
    const token = req.headers.token as string | undefined;
    if(!token){
        return res.status(401).json({ message: "Token missing" });
    }
    const decoded = jwt.verify(token, process.env.JWT_SECRET!) as JwtPayload

    if(decoded){
        // @ts-ignore
        req.user_id = decoded.id;
        next()
    }else {
        res.status(403).json({
            message: "You are not logged in"
        })
    }

}