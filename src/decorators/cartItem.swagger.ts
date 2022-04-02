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
  import { ICartItem } from "../entity/cartItem.model";
  import { CartItemService } from "../services/cartItem.service";
  
  interface Response {
    error: boolean;
    message: string;
  }
  
  @Route("cartitem")
  @Tags("Cart Items")
  export default class CartItemSwagger {
  
    // @Security("jwt")
    @Post("/createCartItem")
    public async createCartItem(
      @Body() request: ICartItem
    ): Promise<Response> {
      const service = new CartItemService();
      const res = await service.createCartItem(request);
      return res;
    }
  
    // @Security("jwt")
    @Get("/")
    public async getAllCartItem(): Promise<ICartItem[]> {
      const service = new CartItemService();
      const res = await service.getAllCartItem();
      return res;
    }
  
    // @Security("jwt")
    @Put("/:id")
    public async updateCartItem(
      id: string,
      @Body() request: ICartItem
    ): Promise<Response> {
      const service = new CartItemService();
      const res = await service.updateCartItem(id, request);
      return res;
    }
  
    // @Security("jwt")
    @Delete("/:id")
    public async deleteCartItem(id: string): Promise<ICartItem> {
      const service = new CartItemService();
      const res = await service.deleteCartItem(id);
      return res;
    }
  }
  