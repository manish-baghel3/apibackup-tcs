import {
  Get,
  Post,
  Put,
  Delete,
  Route,
  Tags,
  Body,
  Security,
  Query,
} from "tsoa";
import { IProductCategory } from "../entity/productCategory.model";
import { ProductCategoryService } from "../services/productCategory.service";

interface Response {
  error: boolean;
  message: string;
}

@Route("category")
@Tags("Product Categories")
export default class ProductCategorySwagger {

  // @Security("jwt")
  @Post("/createProductCategory")
  public async createProductCategory(
    @Body() request: IProductCategory
  ): Promise<Response> {
    const service = new ProductCategoryService();
    const res = await service.createProductCategory(request);
    return res;
  }

  // @Security("jwt")
  @Get("/")
  public async getAllProductCategory(): Promise<IProductCategory[]> {
    const service = new ProductCategoryService();
    const res = await service.getAllProductCategory();
    return res;
  }

  // @Security("jwt")
  @Put("/:id")
  public async updateProductCategory(
    id: string,
    @Body() request: IProductCategory
  ): Promise<Response> {
    const service = new ProductCategoryService();
    const res = await service.updateProductCategory(id, request);
    return res;
  }

  // @Security("jwt")
  @Delete("/:id")
  public async deleteProductCategory(id: string): Promise<IProductCategory> {
    const service = new ProductCategoryService();
    const res = await service.deleteProductCategory(id);
    return res;
  }
}
