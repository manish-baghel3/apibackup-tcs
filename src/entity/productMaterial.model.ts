import { Schema, model } from "mongoose";

// 1. Create multiple interfaces representing a document in MongoDB.

// For ProductMaterial
export interface IProductMaterial {
  materialName:string,
  createdOn: string;
  modifiedOn: string;
  status: number;
}

// 2. Create a Schema corresponding to the document interface.
const schema = new Schema<IProductMaterial>({
    materialName: { type: String, required: true },
    createdOn: { type: String, required: true },
    modifiedOn: { type: String, required: true },
    status: { type: Number, required: true },
    
});

// 3. Create a Model.
let ProductMaterialModel = model<IProductMaterial>("Product.Material", schema);
export default ProductMaterialModel;
