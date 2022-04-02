import express from "express";
import cors = require("cors");
import cookieParser = require("cookie-parser");
import swaggerUi from "swagger-ui-express";
const path = require("path");

// Importing Config File
import { Configuration } from "./utils/config";

// Importing Middlewares
import { Headers } from "./utils/headers";

// Importing Controllers
import AuthUserController from "./controllers/authUser.controller";
import UserRoleController from "./controllers/userRole.controller";
import ProductController from "./controllers/product.controller";
import ProductCategoryController from "./controllers/productCategory.controller";
import ProductSubCategoryController from "./controllers/productSubCategory.controller";
import ProductChildCategoryController from "./controllers/productChildCategory.controller";
import CartItemController from "./controllers/cartItem.controller";
import ProductMaterial from "./controllers/productMaterial.controller";

export default class ExpressServer {
  public static serverInstance: express.Application;

  // Start Express Server.
  public static async start() {
    this.serverInstance = express();

    // Add middlewares.
    this.initializeMiddlewares();

    // Add controllers
    this.initializeControllers();

    // Start Server
    let port = parseInt(Configuration.get("PORT"));
    let NODE_ENV = (Configuration.get("NODE_ENV"));
    this.serverInstance.listen(port, function () {
      console.log(
        `App listening on "${NODE_ENV}" environment at port : ${port}`
      );
    });
  }

  private static initializeMiddlewares() {
    // CORS
    this.serverInstance.use(
      cors({
        origin: true,
        credentials: true,
      })
    );

    // Cookie parser.
    this.serverInstance.use(cookieParser());

    // Serving Swagger-UI
    const swaggerDocument = require("../public/swagger.json");
    this.serverInstance.use(
      "/swagger",
      swaggerUi.serve,
      swaggerUi.setup(swaggerDocument)
    );

    // Body Parser
    let bodyParser = require("body-parser");
    this.serverInstance.use(bodyParser.json({ limit: "50mb" })); // support json encoded bodies
  }

  private static initializeControllers() {
    this.serverInstance.get("/", (req, res) => {
      res.sendFile(path.join(__dirname, "home.html"));
    });

    this.serverInstance.use("/auth", Headers, new AuthUserController().router);
    this.serverInstance.use("/role", Headers, new UserRoleController().router);
    this.serverInstance.use("/product", Headers, new ProductController().router);
    this.serverInstance.use("/category", Headers, new ProductCategoryController().router);
    this.serverInstance.use("/subcategory", Headers, new ProductSubCategoryController().router);
    this.serverInstance.use("/childcategory", Headers, new ProductChildCategoryController().router);
    this.serverInstance.use("/cartitem", Headers, new CartItemController().router);
    this.serverInstance.use("/productmaterial", Headers, new ProductMaterial().router);
  }
}
