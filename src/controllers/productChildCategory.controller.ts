import express from "express";
import ProductChildCategorySwagger from "../decorators/productChildCategory.swagger";

export default class ProductChildCategoryController {
  public router = express.Router();
  constructor() {
    this.intializeRoutes();
  }
  public intializeRoutes() {
    this.router.get("/", this.getAllProductChildCategory);
    this.router.post("/createProductChildCategory", this.createProductChildCategory);
    this.router.put("/:id", this.updateProductChildCategory);
    this.router.delete("/:id", this.deleteProductChildCategory);
  }

  public async getAllProductChildCategory(req, res: express.Response) {
    const userId = req.headers.user;
    try {
      console.log({ message: "Fetching All ProductChildCategory", userId });
      const controller = new ProductChildCategorySwagger();
      const response = await controller.getAllProductChildCategory();
      console.log({ message: "GetAllProductCategory Operation Success.", userId });
      return res.json(response);
    } catch (err) {
      console.log({ message: "GetAllProductCategorys Operation Failed.", err, userId });
      res.status(500).end();
    }
  }

  // Basically a route for Signup Process
  public async createProductChildCategory(req, res: express.Response) {
    const userId = req.headers.user;
    try {
      console.log({ message: "Creating / Add User", Body: req.body, userId });
      const controller = new ProductChildCategorySwagger();
      const response = await controller.createProductChildCategory(req);
      console.log({ message: "CreateProductChildCategory Operation Success.", userId });
      return res.json(response);
    } catch (err) {
      console.log({ message: "CreateProductChildCategory Operation Failed.", err, userId });
      res.status(500).end();
    }
  }

  public async updateProductChildCategory(req, res: express.Response) {
    const userId = req.headers.user;
    try {
      let id = req.params.id;
      if (!id) {
        console.log({ message: "Request Parameter ID not found.", userId });
      } else {
        console.log({
          message: "Updating ProductChildCategory by ID : " + id,
          Body: req.body,
          userId,
        });
      }
      const controller = new ProductChildCategorySwagger();
      const response = await controller.updateProductChildCategory(id, req);
      console.log({ message: "UpdateProductChildCategory Operation Success.", userId });
      return res.json(response);
    } catch (err) {
      console.log({ message: "UpdateProductChildCategory Operation Failed.", err, userId });
      res.status(500).end();
    }
  }

  public async deleteProductChildCategory(req: express.Request, res: express.Response) {
    const userId = req.headers.user;
    try {
      let id = req.params.id;
      if (!id) {
        console.log({ message: "Request Parameter ID not found.", userId });
      } else {
        console.log({ message: "Deleting ProductChildCategory by ID : " + id, userId });
      }
      const controller = new ProductChildCategorySwagger();
      const response = await controller.deleteProductChildCategory(id);
      console.log({ message: "DeleteProductChildCategory Operation Success.", userId });
      return res.json(response);
    } catch (err) {
      console.log({ message: "DeleteProductChildCategory Operation Failed.", err, userId });
      res.status(500).end();
    }
  }
}
