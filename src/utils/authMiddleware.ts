import jwt from 'jsonwebtoken'; 
import { Request, Response, NextFunction } from 'express';
import { Configuration } from '../utils/config';

export const AuthMiddleware = async (req: Request, res: Response, next: NextFunction) => {

        // Checking for JWT Token is valid or not
        let token = req.headers.authorization
        if (token) {
            jwt.verify(token, Configuration.get('SERVER_TOKEN_SECRET'), (error, decoded) => {
                if (error) {
                    return res.status(404).json({
                        error
                    });
                } else {
                    res.locals.jwt = decoded;
                    next();
                }
            });
        } else {
            return res.status(401).json({
                message: 'Unauthorized'
            });
        }
};
