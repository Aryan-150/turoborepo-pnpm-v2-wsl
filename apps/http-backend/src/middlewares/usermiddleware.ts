import { NextFunction, Request, Response } from "express";

export default function userMiddleware(req: Request, res: Response,next: NextFunction) {
    console.log('add the middleware logic, here just checking if the imports are running fine ?');
    next();
}