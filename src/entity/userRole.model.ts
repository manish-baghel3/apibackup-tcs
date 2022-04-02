import { Schema, model } from "mongoose";

// 1. Create multiple interfaces representing a document in MongoDB.

// For User
export interface IUserRole {
  roleName: string;
  roleDescription: string;
  createdOn: string;
}

// 2. Create a Schema corresponding to the document interface.
const schema = new Schema<IUserRole>({
  roleName: { type: String, required: true },
  roleDescription: { type: String, required: true },
  createdOn: { type: String, required: true },
});

// 3. Create a Model.
let UserRoleModel = model<IUserRole>("User.Role", schema);
export default UserRoleModel;
