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
  import { IProductMaterial } from "../entity/productMaterial.model";
  import { ProductMaterialService } from "../services/productMaterial.service";
  
  interface Response {
    error: boolean;
    message: string;
  }
  
  @Route("productMaterial")
  @Tags("Product Material")
  export default class ProductMaterialSwagger {
  
    // @Security("jwt")
    @Post("/createProductMaterial")
    public async createProductMaterial(
      @Body() request: IProductMaterial
    ): Promise<Response> {
      const service = new ProductMaterialService();
      const res = await service.createProductMaterial(request);
      return res;
    }
  
    // @Security("jwt")
    @Get("/")
    public async getAllProductMaterial(): Promise<IProductMaterial[]> {
      const service = new ProductMaterialService();
      const res = await service.getAllProductMaterial();
      return res;
    }
  
    // @Security("jwt")
    @Put("/:id")
    public async updateProductMaterial(
      id: string,
      @Body() request: IProductMaterial
    ): Promise<Response> {
      const service = new ProductMaterialService();
      const res = await service.updateProductMaterial(id, request);
      return res;
    }
  
    // @Security("jwt")
    @Delete("/:id")
    public async deleteProductMaterial(id: string): Promise<IProductMaterial> {
      const service = new ProductMaterialService();
      const res = await service.deleteProductMaterial(id);
      return res;
    }
  }
  