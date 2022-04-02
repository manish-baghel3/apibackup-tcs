import { Schema, model } from "mongoose";

// 1. Create multiple interfaces representing a document in MongoDB.

// For CartItem
export interface ICartItem {
  userId:string,
  userEmail:string,
  productId:string,
  productSize: string,
  quantity: number,
}

// 2. Create a Schema corresponding to the document interface.
const schema = new Schema<ICartItem>({
    userId: { type: String, required: true },
    userEmail: {type: String, required: false },
    productId: {type: String, required: true },
    productSize: {type: String, required: false },
    quantity: {type: Number, required: true },
});

// 3. Create a Model.
let CartItemModel = model<ICartItem>("Cart.Item", schema);
export default CartItemModel;
