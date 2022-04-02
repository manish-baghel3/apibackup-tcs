import { Schema, model } from "mongoose";

// 1. Create multiple interfaces representing a document in MongoDB.
export interface IProductCategory {
  name: string;
  createdOn: string;
  modifiedOn: string;
  status: number;
}

// 2. Create a Schema corresponding to the document interface.
const schema = new Schema<IProductCategory>({
  name: { type: String, required: true },
  createdOn: { type: String, required: true },
  modifiedOn: { type: String, required: true },
  status: { type: Number, required: true },
});

// 3. Create a Model.
let ProductCategoryModel = model<IProductCategory>("Product.Category", schema);
export default ProductCategoryModel;
