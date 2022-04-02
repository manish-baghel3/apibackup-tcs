import express from 'express';
import UserRoleSwagger from "../decorators/userRole.swagger";
import { AuthMiddleware } from "../utils/authMiddleware";
import { Configuration } from '../utils/config';

export default class UserRoleController { 
    public router = express.Router();
    constructor() {
        this.intializeRoutes();
    }
    public intializeRoutes() {
        this.router.get('/', this.getAllUserRole);
        this.router.post('/createRole', this.createUserRole);
        this.router.put('/:id',this.updateUserRole);
        this.router.delete('/:id', this.deleteUserRole);
    }

    public async getAllUserRole(req, res: express.Response) {
        const userId = req.headers.user
        try {            
            console.log({ message: "Fetching All Users", userId })
            const controller = new UserRoleSwagger();
            const response = await controller.getAllUserRole();
            console.log({ message: "GetAllUserRole Operation Success.", userId })
            return res.json(response);
        } catch (err) {
            console.log({message: "GetAllUsers Operation Failed.", err, userId })
            res.status(500).end();
        }
    }

    // Basically a route for Signup Process
    public async createUserRole(req, res: express.Response) {
        const userId = req.headers.user
        try {
            console.log({ message: "Creating / Add User", Body: req.body, userId })
            const controller = new UserRoleSwagger();
            const response = await controller.createUserRole(req);
            console.log({ message: "CreateUser Operation Success.", userId })
            return res.json(response);
        } catch (err) {
            console.log({message: "CreateUser Operation Failed.", err, userId})
            res.status(500).end();
        }
    }

    public async updateUserRole(req, res: express.Response) {
        const userId = req.headers.user
        try {
            let id = req.params.id;
            if(!id) {
            console.log({ message: "Request Parameter ID not found.", userId })
            } else {
            console.log({ message: "Updating User by ID : " + id , Body: req.body, userId })
            }
            const controller = new UserRoleSwagger();
            const response = await controller.updateUserRole(id, req);
            console.log({ message: "UpdateUser Operation Success.", userId })
            return res.json(response);
        } catch (err) {
            console.log({message: "UpdateUser Operation Failed.", err, userId})
            res.status(500).end();
        }
    }

    public async deleteUserRole(req: express.Request, res: express.Response) {
        const userId = req.headers.user
        try {
            let id = req.params.id;
            if(!id) {
            console.log({ message: "Request Parameter ID not found.", userId })
            } else {
            console.log({ message: "Deleting User by ID : " + id, userId })
            }
            const controller = new UserRoleSwagger();
            const response = await controller.deleteUserRole(id);
            console.log({ message: "DeleteUser Operation Success.", userId })
            return res.json(response);
        } catch (err) {
            console.log({message: "DeleteUser Operation Failed.", err, userId})
            res.status(500).end();
        }
    }
}