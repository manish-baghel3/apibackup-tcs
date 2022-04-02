import express from 'express';
import CartItemSwagger from "../decorators/cartItem.swagger";
import { AuthMiddleware } from "../utils/authMiddleware";
import { Configuration } from '../utils/config';

export default class CartItemController { 
    public router = express.Router();
    constructor() {
        this.intializeRoutes();
    }
    public intializeRoutes() {
        this.router.get('/', this.getAllCartItem);
        this.router.post('/cartItem', this.createCartItem);
        this.router.put('/:id',this.updateCartItem);
        this.router.delete('/:id', this.deleteCartItem);
    }

    public async getAllCartItem(req, res: express.Response) {
        const userId = req.headers.user
        try {            
            console.log({ message: "Fetching All Cart Items", userId })
            const controller = new CartItemSwagger();
            const response = await controller.getAllCartItem();
            console.log({ message: "GetAllCartItem Operation Success.", userId })
            return res.json(response);
        } catch (err) {
            console.log({message: "GetAllCartItem Operation Failed.", err, userId })
            res.status(500).end();
        }
    }

    public async createCartItem(req, res: express.Response) {
        const userId = req.headers.user
        try {
            console.log({ message: "Creating / Add User", Body: req.body, userId })
            const controller = new CartItemSwagger();
            const response = await controller.createCartItem(req);
            console.log({ message: "CreateCartItem Operation Success.", userId })
            return res.json(response);
        } catch (err) {
            console.log({message: "CreateCartItem Operation Failed.", err, userId})
            res.status(500).end();
        }
    }

    public async updateCartItem(req, res: express.Response) {
        const userId = req.headers.user;
        try {
            let id = req.params.id;
            if (!id) {
                console.log({ message: "Request Parameter ID not found.", userId });
            } else {
                console.log({
                message: "Updating CartItem by ID : " + id,
                Body: req.body,
                userId,
                });
            }
            const controller = new CartItemSwagger();
            const response = await controller.updateCartItem(id, req);
            console.log({ message: "UpdateCartItem Operation Success.", userId });
            return res.json(response);
            } catch (err) {
            console.log({ message: "UpdateCartItem Operation Failed.", err, userId });
            res.status(500).end();
        }
    }

    public async deleteCartItem(req: express.Request, res: express.Response) {
        const userId = req.headers.user;
        try {
            let id = req.params.id;
            if (!id) {
                console.log({ message: "Request Parameter ID not found.", userId });
            } else {
                console.log({ message: "Deleting CartItem by ID : " + id, userId });
            }
            const controller = new CartItemSwagger();
            const response = await controller.deleteCartItem(id);
            console.log({ message: "DeleteCartItem Operation Success.", userId });
            return res.json(response);
        } catch (err) {
            console.log({ message: "DeleteCartItem Operation Failed.", err, userId });
            res.status(500).end();
        }
    }
}