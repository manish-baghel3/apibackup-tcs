import express from 'express';
import AuthUserSwagger from "../decorators/authUser.swagger";
import { AuthMiddleware } from "../utils/authMiddleware";
import { Configuration } from '../utils/config';

export default class AuthUserController { 
    public router = express.Router();
    constructor() {
        this.intializeRoutes();
    }
    public intializeRoutes() {
        const multer = require('multer')
        this.router.get('/user/', this.getAllAuthUser);
        this.router.get('/user/:id', this.getAuthUserById);
        this.router.post('/createUser', multer().single("profilePhoto"), this.createAuthUser);
        this.router.post('/loginUser', multer().none(), this.loginAuthUser);
        this.router.put('/user/:id',this.updateAuthUser);
        this.router.put('/changePassword/:id', this.changePassword);
        this.router.delete('/user/:id', this.deleteAuthUser);
    }

    public async getAllAuthUser(req, res: express.Response) {
        const userId = req.headers.user
        try {            
            console.log({ message: "Fetching All Users", userId })
            const controller = new AuthUserSwagger();
            const response = await controller.getAllAuthUser();
            return res.json(response);
        } catch (err) {
            console.log({message: "GetAllUsers Operation Failed.", err, userId })
            res.status(500).end();
        }
    }

    public async getAuthUserById(req: express.Request, res: express.Response) {
        const userId = req.headers.user
        try {
            let id = req.params.id;
            if(!id) {
                console.log({ message: "Request Parameter ID not found.", userId })
            } else {
                console.log({ message: "Getting User by ID : " + id, userId })
            }
            const controller = new AuthUserSwagger();
            const response = await controller.getAuthUserById(id);
            return res.json(response);
        } catch (err) {
            console.log({message: "GetUserById Operation Failed.", err, userId})
            res.status(500).end();
        }
    }

    // Basically a route for Signup Process
    public async createAuthUser(req, res: express.Response) {
        const userId = req.headers.user
        try {
            console.log({ message: "Creating User", Body: req.body, userId })
            const controller = new AuthUserSwagger();
            const response = await controller.createAuthUser(req);
            console.log({ message: "CreateUser Operation Success.", userId })
            return res.json(response);
        } catch (err) {
            console.log({message: "CreateUser Operation Failed.", err, userId})
            res.status(500).end();
        }
    }

    // Basically a route for Login Process
    public async loginAuthUser(req, res: express.Response) {
        try {
            const controller = new AuthUserSwagger();
            const response = await controller.loginAuthUser(req);
            return res.json(response);
        } catch (err) {
            console.log({message: "Login Failed Due to Internal Server Error", err})
            res.status(500).end();
        }
    }

    public async updateAuthUser(req, res: express.Response) {
        const userId = req.headers.user
        try {
            let id = req.params.id;
            if(!id) {
            console.log({ message: "Request Parameter ID not found.", userId })
            } else {
            console.log({ message: "Updating User by ID : " + id , Body: req.body, userId })
            }
            const controller = new AuthUserSwagger();
            const response = await controller.updateAuthUser(id, req);
            console.log({ message: "UpdateUser Operation Success.", userId })
            return res.json(response);
        } catch (err) {
            console.log({message: "UpdateUser Operation Failed.", err, userId})
            res.status(500).end();
        }
    }

    public async changePassword(req, res: express.Response) {
        const userId = req.headers.user
        try {
            let id = req.params.id;
            if(!id) {
            console.log({ message: "Request Parameter ID not found.", userId })
            } else {
            console.log({ message: "Updating Password by ID : " + id + " New Data : " + req.body, userId })
            }
            const controller = new AuthUserSwagger();
            const response = await controller.changePassword(id, req);
            console.log({ message: "ChangePassword Operation Success.", userId })
            return res.json(response);
        } catch (err) {
            console.log({message: "ChangePassword Operation Failed.", err, userId})
            res.status(500).end();
        }
    }

    public async deleteAuthUser(req: express.Request, res: express.Response) {
        const userId = req.headers.user
        try {
            let id = req.params.id;
            if(!id) {
            console.log({ message: "Request Parameter ID not found.", userId })
            } else {
            console.log({ message: "Deleting User by ID : " + id, userId })
            }
            const controller = new AuthUserSwagger();
            const response = await controller.deleteAuthUser(id);
            console.log({ message: "DeleteUser Operation Success.", userId })
            return res.json(response);
        } catch (err) {
            console.log({message: "DeleteUser Operation Failed.", err, userId})
            res.status(500).end();
        }
    }
}