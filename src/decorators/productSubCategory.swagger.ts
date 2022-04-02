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
import { IProductSubCategory } from "../entity/productSubCategory.model";
import { ProductSubCategoryService } from "../services/productSubCategory.service";

interface Response {
  error: boolean;
  message: string;
}

@Route("subCategory")
@Tags("Product SubCategories")
export default class ProductSubCategorySwagger {

  // @Security("jwt")
  @Post("/createProductSubCategory")
  public async createProductSubCategory(
    @Body() request: IProductSubCategory
  ): Promise<Response> {
    const service = new ProductSubCategoryService();
    const res = await service.createProductSubCategory(request);
    return res;
  }

  // @Security("jwt")
  @Get("/")
  public async getAllProductSubCategory(): Promise<IProductSubCategory[]> {
    const service = new ProductSubCategoryService();
    const res = await service.getAllProductSubCategory();
    return res;
  }

  // @Security("jwt")
  @Put("/:id")
  public async updateProductSubCategory(
    id: string,
    @Body() request: IProductSubCategory
  ): Promise<Response> {
    const service = new ProductSubCategoryService();
    const res = await service.updateProductSubCategory(id, request);
    return res;
  }

  // @Security("jwt")
  @Delete("/:id")
  public async deleteProductSubCategory(id: string): Promise<IProductSubCategory> {
    const service = new ProductSubCategoryService();
    const res = await service.deleteProductSubCategory(id);
    return res;
  }
}
