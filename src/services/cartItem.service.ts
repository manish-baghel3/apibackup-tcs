import CartItemModel from "../entity/cartItem.model";
import { Configuration } from "../utils/config";
const jwt = require("jsonwebtoken");

export class CartItemService {
  constructor() {}

  public async getAllCartItem() {
    let CartItems = await CartItemModel.find().sort({ _id: 1 }).exec();
    return CartItems;
  }

  // Creates A cartItem.
  public async createCartItem(request) {
    request.body.createdOn = new Date().getTime();
    const CartItem = new CartItemModel({
      ...request.body,
    });
    await CartItem.save();
    return { error: false, message: "CartItem Creation Successful" };
  }

  // Updates a CartItem
  public async updateCartItem(id: string, request) {
    let update = {
      ...request.body,
    };
    await CartItemModel.findByIdAndUpdate(id, update);
    let UpdatedCartItem = await CartItemModel.findById(id);
    console.log({ message: "Cart Item Updated" });
    return { error: false, message: "Cart Item Updated" };
  }

  // Deletes a CartItem
  public async deleteCartItem(id: string) {
    let CartItem = await CartItemModel.findByIdAndDelete(id);
    return CartItem;
  }
}
