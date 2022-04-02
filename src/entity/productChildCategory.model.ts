import { Schema, model } from "mongoose";

// 1. Create multiple interfaces representing a document in MongoDB.
export interface IProductChildCategory {
    subCategoryID: string;
    name: string;
    createdOn: string;
    modifiedOn: string;
    status: number;
}

// 2. Create a Schema corresponding to the document interface.
const schema = new Schema<IProductChildCategory>({
    subCategoryID:{type: String, required: true},
    name: { type: String, required: true },
    createdOn: { type: String, required: true },
    modifiedOn: { type: String, required: true },
    status: { type: Number, required: true },
});

// 3. Create a Model.
let ProductChildCategoryModel = model<IProductChildCategory>("Product.ChildCategory", schema);
export default ProductChildCategoryModel;
