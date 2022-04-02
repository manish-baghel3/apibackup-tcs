import express from "express";
import ProductSwagger from "../decorators/product.swagger";

export default class ProductController {
  public router = express.Router();
  constructor() {
    this.intializeRoutes();
  }
  public intializeRoutes() {
    this.router.get("/", this.getAllProduct);
    this.router.get("/:id", this.getProductByID);
    this.router.post("/createProduct", this.createProduct);
    this.router.put("/:id", this.updateProduct);
    this.router.delete("/:id", this.deleteProduct);
  }

  public async getAllProduct(req, res: express.Response) {
    const userId = req.headers.user;
    try {
      console.log({ message: "Fetching All Products", userId });
      const controller = new ProductSwagger();
      const response = await controller.getAllProduct();
      console.log({ message: "GetAllProduct Operation Success.", userId });
      return res.json(response);
    } catch (err) {
      console.log({ message: "GetAllProducts Operation Failed.", err, userId });
      res.status(500).end();
    }
  }

  public async getProductByID(req, res: express.Response) {
    const userId = req.headers.user;
    try {
      let id = req.params.id;
      if(!id){
        console.log({ message: "Request Parameter ID not found.", userId });
      } else {
        console.log({ message: "Fetching Products by ID : " + id, userId });
      }
      const controller = new ProductSwagger();
      const response = await controller.getProductByID(id);
      console.log({ message: "GetProductByID Operation Success.", userId });
      return res.json(response);
    } catch (err) {
      console.log({ message: "GetProductByID Operation Failed.", err, userId });
      res.status(500).end();
    }
  }

  public async createProduct(req, res: express.Response) {
    const userId = req.headers.user;
    try {
      console.log({ message: "Creating / Add User", Body: req.body, userId });
      const controller = new ProductSwagger();
      const response = await controller.createProduct(req);
      console.log({ message: "CreateProduct Operation Success.", userId });
      return res.json(response);
    } catch (err) {
      console.log({ message: "CreateProduct Operation Failed.", err, userId });
      res.status(500).end();
    }
  }

  public async updateProduct(req, res: express.Response) {
    const userId = req.headers.user;
    try {
      let id = req.params.id;
      if (!id) {
        console.log({ message: "Request Parameter ID not found.", userId });
      } else {
        console.log({
          message: "Updating Product by ID : " + id,
          Body: req.body,
          userId,
        });
      }
      const controller = new ProductSwagger();
      const response = await controller.updateProduct(id, req);
      console.log({ message: "UpdateProduct Operation Success.", userId });
      return res.json(response);
    } catch (err) {
      console.log({ message: "UpdateProduct Operation Failed.", err, userId });
      res.status(500).end();
    }
  }

  public async deleteProduct(req: express.Request, res: express.Response) {
    const userId = req.headers.user;
    try {
      let id = req.params.id;
      if (!id) {
        console.log({ message: "Request Parameter ID not found.", userId });
      } else {
        console.log({ message: "Deleting Product by ID : " + id, userId });
      }
      const controller = new ProductSwagger();
      const response = await controller.deleteProduct(id);
      console.log({ message: "DeleteProduct Operation Success.", userId });
      return res.json(response);
    } catch (err) {
      console.log({ message: "DeleteProduct Operation Failed.", err, userId });
      res.status(500).end();
    }
  }
}
