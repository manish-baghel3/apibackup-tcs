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
  import { IProductChildCategory } from "../entity/productChildCategory.model";
  import { ProductChildCategoryService } from "../services/productChildCategory.service";
  
  interface Response {
    error: boolean;
    message: string;
  }
  
  @Route("childCategory")
  @Tags("Product ChildCategories")
  export default class ProductChildCategorySwagger {
  
    // @Security("jwt")
    @Post("/createProductChildCategory")
    public async createProductChildCategory(
      @Body() request: IProductChildCategory
    ): Promise<Response> {
      const service = new ProductChildCategoryService();
      const res = await service.createProductChildCategory(request);
      return res;
    }
  
    // @Security("jwt")
    @Get("/")
    public async getAllProductChildCategory(): Promise<IProductChildCategory[]> {
      const service = new ProductChildCategoryService();
      const res = await service.getAllProductChildCategory();
      return res;
    }
  
    // @Security("jwt")
    @Put("/:id")
    public async updateProductChildCategory(
      id: string,
      @Body() request: IProductChildCategory
    ): Promise<Response> {
      const service = new ProductChildCategoryService();
      const res = await service.updateProductChildCategory(id, request);
      return res;
    }
  
    // @Security("jwt")
    @Delete("/:id")
    public async deleteProductChildCategory(id: string): Promise<IProductChildCategory> {
      const service = new ProductChildCategoryService();
      const res = await service.deleteProductChildCategory(id);
      return res;
    }
  }
  