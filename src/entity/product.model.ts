import { Schema, model } from "mongoose";

// 1. Create multiple interfaces representing a document in MongoDB.
export interface IProduct {
  name: string;
  productCategoryID: string;
  productSubCategoryID: string;
  productChildCategoryId:string;
  // materialId:string[],
  material:string,
  productBrandID: string;
  description: string;
  imageURLs: string[];
  status: number;
  quantitiy: number;
  sponsoredBy: string;
  sponsoredOn: string;
  vibes: number;
  slug: string,
  size: string[],
  dimension: string[],
  weight: string[],
  sellingPrice: string[],
}

// 2. Create a Schema corresponding to the document interface.
const schema = new Schema<IProduct>({
  name: { type: String, required: true },
  productCategoryID: { type: String, required: true },
  productSubCategoryID: { type: String, required: false },
  productChildCategoryId: { type: String, required: false},
  // materialId: { type: [String], required: false},
  material: { type: String, required: false},
  productBrandID: { type: String, required: true },
  description: { type: String, required: true },
  imageURLs: { type: [String], required: true },
  status: { type: Number, required: true },
  quantitiy: { type: Number, required: true },
  sponsoredBy: { type: String, required: true },
  sponsoredOn: { type: String, required: true },
  vibes: { type: Number, required: true, default: 0 },
  slug: { type: String, required: false },
  size: { type: [String], required: false },
  dimension: { type: [String], required: false },
  weight: { type: [String], required: false },
  sellingPrice: { type: [String], required: false },
});

// 3. Create a Model.
let ProductModel = model<IProduct>("Product", schema);
export default ProductModel;
