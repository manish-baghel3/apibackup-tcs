import UserRoleModel from "../entity/userRole.model";
import { Configuration } from "../utils/config";
const jwt = require("jsonwebtoken");

export class UserRoleService {
  constructor() {}

  public async getAllUserRole() {
    let UserRoles = await UserRoleModel.find().sort({ _id: 1 }).exec();
    return UserRoles;
  }

  // Creates A Role.
  public async createUserRole(request) {
    request.body.createdOn = new Date().getTime();
    const UserRole = new UserRoleModel({
      ...request.body,
    });
    await UserRole.save();
    return { error: false, message: "Role Creation Successful" };
  }

  // Updates a Role
  public async updateUserRole(id: string, request) {
    let update = {
      ...request.body,
    };
    await UserRoleModel.findByIdAndUpdate(id, update);
    let UpdatedUserRole = await UserRoleModel.findById(id);
    console.log({ message: "User Role Updated" });
    return { error: false, message: "User Role Updated" };
  }

  // Deletes a Role
  public async deleteUserRole(id: string) {
    let UserRole = await UserRoleModel.findByIdAndDelete(id);
    return UserRole;
  }
}
