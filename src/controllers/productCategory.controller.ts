import express from "express";
import ProductCategorySwagger from "../decorators/productCategory.swagger";

export default class ProductCategoryController {
  public router = express.Router();
  constructor() {
    this.intializeRoutes();
  }
  public intializeRoutes() {
    this.router.get("/", this.getAllProductCategory);
    this.router.post("/createProductCategory", this.createProductCategory);
    this.router.put("/:id", this.updateProductCategory);
    this.router.delete("/:id", this.deleteProductCategory);
  }

  public async getAllProductCategory(req, res: express.Response) {
    const userId = req.headers.user;
    try {
      console.log({ message: "Fetching All ProductCategorys", userId });
      const controller = new ProductCategorySwagger();
      const response = await controller.getAllProductCategory();
      console.log({ message: "GetAllProductCategory Operation Success.", userId });
      return res.json(response);
    } catch (err) {
      console.log({ message: "GetAllProductCategorys Operation Failed.", err, userId });
      res.status(500).end();
    }
  }

  // Basically a route for Signup Process
  public async createProductCategory(req, res: express.Response) {
    const userId = req.headers.user;
    try {
      console.log({ message: "Creating / Add User", Body: req.body, userId });
      const controller = new ProductCategorySwagger();
      const response = await controller.createProductCategory(req);
      console.log({ message: "CreateProductCategory Operation Success.", userId });
      return res.json(response);
    } catch (err) {
      console.log({ message: "CreateProductCategory Operation Failed.", err, userId });
      res.status(500).end();
    }
  }

  public async updateProductCategory(req, res: express.Response) {
    const userId = req.headers.user;
    try {
      let id = req.params.id;
      if (!id) {
        console.log({ message: "Request Parameter ID not found.", userId });
      } else {
        console.log({
          message: "Updating ProductCategory by ID : " + id,
          Body: req.body,
          userId,
        });
      }
      const controller = new ProductCategorySwagger();
      const response = await controller.updateProductCategory(id, req);
      console.log({ message: "UpdateProductCategory Operation Success.", userId });
      return res.json(response);
    } catch (err) {
      console.log({ message: "UpdateProductCategory Operation Failed.", err, userId });
      res.status(500).end();
    }
  }

  public async deleteProductCategory(req: express.Request, res: express.Response) {
    const userId = req.headers.user;
    try {
      let id = req.params.id;
      if (!id) {
        console.log({ message: "Request Parameter ID not found.", userId });
      } else {
        console.log({ message: "Deleting ProductCategory by ID : " + id, userId });
      }
      const controller = new ProductCategorySwagger();
      const response = await controller.deleteProductCategory(id);
      console.log({ message: "DeleteProductCategory Operation Success.", userId });
      return res.json(response);
    } catch (err) {
      console.log({ message: "DeleteProductCategory Operation Failed.", err, userId });
      res.status(500).end();
    }
  }
}
