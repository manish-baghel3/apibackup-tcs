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
import { IProduct } from "../entity/product.model";
import { ProductService } from "../services/product.service";

interface Response {
  error: boolean;
  message: string;
}

@Route("product")
@Tags("Products")
export default class ProductSwagger {

  // @Security("jwt")
  @Post("/createProduct")
  public async createProduct(
    @Body() request: IProduct
  ): Promise<Response> {
    const service = new ProductService();
    const res = await service.createProduct(request);
    return res;
  }

  // @Security("jwt")
  @Get("/")
  public async getAllProduct(@Query() categoryId: string,@Query() subCategoryId: string,@Query() brandId: string,@Query() userId: string,): Promise<IProduct[]> {
    const service = new ProductService();
    const res = await service.getAllProduct(categoryId,subCategoryId,brandId,userId);
    return res;
  }

  // @Security("jwt")
  @Get("/all")
  public async getAllProducts(): Promise<IProduct[]> {
    const service = new ProductService();
    const res = await service.getAllProducts();
    return res;
  }

  // @Security("jwt")
  @Get("/:id")
  public async getProductByID(id:string): Promise<IProduct> {
    const service = new ProductService();
    const res = await service.getProductByID(id);
    return res;
  }

  // @Security("jwt")
  @Put("/:id")
  public async updateProduct(
    id: string,
    @Body() request: IProduct
  ): Promise<Response> {
    const service = new ProductService();
    const res = await service.updateProduct(id, request);
    return res;
  }

  // @Security("jwt")
  @Delete("/:id")
  public async deleteProduct(id: string): Promise<IProduct> {
    const service = new ProductService();
    const res = await service.deleteProduct(id);
    return res;
  }
}
