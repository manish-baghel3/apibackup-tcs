import express from "express";
import ProductMaterialSwagger from "../decorators/productMaterial.swagger";

export default class ProductMaterialController {
  public router = express.Router();
  constructor() {
    this.intializeRoutes();
  }
  public intializeRoutes() {
    this.router.get("/", this.getAllProductMaterial);
    this.router.post("/createProductMaterial", this.createProductMaterial);
    this.router.put("/:id", this.updateProductMaterial);
    this.router.delete("/:id", this.deleteProductMaterial);
  }

  public async getAllProductMaterial(req, res: express.Response) {
    const userId = req.headers.user;
    try {
      console.log({ message: "Fetching All ProductMaterial", userId });
      const controller = new ProductMaterialSwagger();
      const response = await controller.getAllProductMaterial();
      console.log({ message: "GetAllProductMaterial Operation Success.", userId });
      return res.json(response);
    } catch (err) {
      console.log({ message: "GetAllProductMaterial Operation Failed.", err, userId });
      res.status(500).end();
    }
  }

  // Basically a route for Signup Process
  public async createProductMaterial(req, res: express.Response) {
    const userId = req.headers.user;
    try {
      console.log({ message: "Creating / Add User", Body: req.body, userId });
      const controller = new ProductMaterialSwagger();
      const response = await controller.createProductMaterial(req);
      console.log({ message: "CreateProductMaterial Operation Success.", userId });
      return res.json(response);
    } catch (err) {
      console.log({ message: "CreateProductMaterial Operation Failed.", err, userId });
      res.status(500).end();
    }
  }

  public async updateProductMaterial(req, res: express.Response) {
    const userId = req.headers.user;
    try {
      let id = req.params.id;
      if (!id) {
        console.log({ message: "Request Parameter ID not found.", userId });
      } else {
        console.log({
          message: "Updating ProductMaterial by ID : " + id,
          Body: req.body,
          userId,
        });
      }
      const controller = new ProductMaterialSwagger();
      const response = await controller.updateProductMaterial(id, req);
      console.log({ message: "UpdateProductMaterial Operation Success.", userId });
      return res.json(response);
    } catch (err) {
      console.log({ message: "UpdateProductMaterial Operation Failed.", err, userId });
      res.status(500).end();
    }
  }

  public async deleteProductMaterial(req: express.Request, res: express.Response) {
    const userId = req.headers.user;
    try {
      let id = req.params.id;
      if (!id) {
        console.log({ message: "Request Parameter ID not found.", userId });
      } else {
        console.log({ message: "Deleting ProductMaterial by ID : " + id, userId });
      }
      const controller = new ProductMaterialSwagger();
      const response = await controller.deleteProductMaterial(id);
      console.log({ message: "DeleteProductMaterial Operation Success.", userId });
      return res.json(response);
    } catch (err) {
      console.log({ message: "DeleteProductMaterial Operation Failed.", err, userId });
      res.status(500).end();
    }
  }
}
