import express from "express";
import ProductSubCategorySwagger from "../decorators/productSubCategory.swagger";

export default class ProductSubCategoryController {
  public router = express.Router();
  constructor() {
    this.intializeRoutes();
  }
  public intializeRoutes() {
    this.router.get("/", this.getAllProductSubCategory);
    this.router.post("/createProductSubCategory", this.createProductSubCategory);
    this.router.put("/:id", this.updateProductSubCategory);
    this.router.delete("/:id", this.deleteProductSubCategory);
  }

  public async getAllProductSubCategory(req, res: express.Response) {
    const userId = req.headers.user;
    try {
      console.log({ message: "Fetching All ProductSubCategorys", userId });
      const controller = new ProductSubCategorySwagger();
      const response = await controller.getAllProductSubCategory();
      console.log({ message: "GetAllProductSubCategory Operation Success.", userId });
      return res.json(response);
    } catch (err) {
      console.log({ message: "GetAllProductSubCategorys Operation Failed.", err, userId });
      res.status(500).end();
    }
  }

  // Basically a route for Signup Process
  public async createProductSubCategory(req, res: express.Response) {
    const userId = req.headers.user;
    try {
      console.log({ message: "Creating / Add User", Body: req.body, userId });
      const controller = new ProductSubCategorySwagger();
      const response = await controller.createProductSubCategory(req);
      console.log({ message: "CreateProductSubCategory Operation Success.", userId });
      return res.json(response);
    } catch (err) {
      console.log({ message: "CreateProductSubCategory Operation Failed.", err, userId });
      res.status(500).end();
    }
  }

  public async updateProductSubCategory(req, res: express.Response) {
    const userId = req.headers.user;
    try {
      let id = req.params.id;
      if (!id) {
        console.log({ message: "Request Parameter ID not found.", userId });
      } else {
        console.log({
          message: "Updating ProductSubCategory by ID : " + id,
          Body: req.body,
          userId,
        });
      }
      const controller = new ProductSubCategorySwagger();
      const response = await controller.updateProductSubCategory(id, req);
      console.log({ message: "UpdateProductSubCategory Operation Success.", userId });
      return res.json(response);
    } catch (err) {
      console.log({ message: "UpdateProductSubCategory Operation Failed.", err, userId });
      res.status(500).end();
    }
  }

  public async deleteProductSubCategory(req: express.Request, res: express.Response) {
    const userId = req.headers.user;
    try {
      let id = req.params.id;
      if (!id) {
        console.log({ message: "Request Parameter ID not found.", userId });
      } else {
        console.log({ message: "Deleting ProductSubCategory by ID : " + id, userId });
      }
      const controller = new ProductSubCategorySwagger();
      const response = await controller.deleteProductSubCategory(id);
      console.log({ message: "DeleteProductSubCategory Operation Success.", userId });
      return res.json(response);
    } catch (err) {
      console.log({ message: "DeleteProductSubCategory Operation Failed.", err, userId });
      res.status(500).end();
    }
  }
}
