import { Schema, model } from "mongoose";

// 1. Create multiple interfaces representing a document in MongoDB.
export interface IProductSubCategory {
  parentCategoryID: string;
  name: string;
  createdOn: string;
  modifiedOn: string;
  status: number;
}

// 2. Create a Schema corresponding to the document interface.
const schema = new Schema<IProductSubCategory>({
  parentCategoryID: { type: String, required: true },
  name: { type: String, required: true },
  createdOn: { type: String, required: true },
  modifiedOn: { type: String, required: true },
  status: { type: Number, required: true },
});

// 3. Create a Model.
let ProductSubCategoryModel = model<IProductSubCategory>("Product.SubCategory", schema);
export default ProductSubCategoryModel;
