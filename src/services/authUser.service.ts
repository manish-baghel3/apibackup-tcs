import AuthUserModel from "../entity/authUser.model";
import { Configuration } from "../utils/config";
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

export class AuthUserService {
  constructor() {}

  public async getAllAuthUser() {
    let AuthUsers = await AuthUserModel.find()
      .select("-password")
      .sort({ _id: 1 })
      .exec();
    console.log({ message: "GetAllAuthUser Operation Success." });
    return AuthUsers;
  }

  public async getAuthUserById(id: string) {
    let myAuthUser = await AuthUserModel.findById(id).select("-password");
    console.log({ message: "GetUserById Operation Success." });
    return myAuthUser;
  }

  // This API will be called while Signing Up.
  public async createAuthUser(request) {
    request.body.createdOn = new Date().getTime();
    request.body.modifiedOn = new Date().getTime();
    let user = await AuthUserModel.findOne({ email: request.body.email });
    if (user)
      return {
        error: true,
        message: "User with same Email already exists",
        result: null,
      };
    console.log({ message: "Email Check Success" });
    user = await AuthUserModel.findOne({ mobile: request.body.mobile });
    if (user)
      return {
        error: true,
        message: "User with same Mobile already exists",
        result: null,
      };
    console.log({ message: "Mobile Check Success" });
    const secPass = await bcrypt.hash(
      request.body.password,
      await bcrypt.genSalt(10)
    );
    console.log({ message: "Password Encrypted Successfully" });
    request.body.password = secPass;
    const AuthUser = new AuthUserModel({
      ...request.body,
    });
    console.log({ message: "Signing JWT Token" });
    var token = jwt.sign(
      { data: AuthUser },
      Configuration.get("SERVER_TOKEN_SECRET")
    );
    await AuthUser.save();
    return { error: false, message: "SignUp Successful", result: token };
  }

  // This API will be called while Signing In.
  public async loginAuthUser(request) {
    let AuthUser = await AuthUserModel.findOne({ email: request.body.email });
    if (!AuthUser)
      return { error: true, message: "Email Not Found.", result: null };
    console.log({ message: "Email Check Success" });
    const comparePass = await bcrypt.compare(
      request.body.password,
      AuthUser.password
    );
    if (!comparePass) {
      return { error: true, message: "Invalid Credentials.", result: null };
    } else {
      console.log({ message: "Password Matched." });
    }
    console.log({ message: "Signing JWT Token" });
    var token = jwt.sign(
      { data: AuthUser },
      Configuration.get("SERVER_TOKEN_SECRET")
    );
    return { error: false, message: "Login Successful", result: token };
  }

  // This API will be called for changing password.
  public async changePassword(id: string, request) {
    request.body.modifiedOn = new Date().getTime();
    let AuthUser = await AuthUserModel.findById(id);

    const comparePass = await bcrypt.compare(
      request.body.oldPassword,
      AuthUser.password
    );

    if (!comparePass) {
      return {
        error: true,
        message: "Old Password You Entered is Incorrect.",
        result: null,
      };
    } else {
      console.log({ message: "Old Password Matched." });
      const secPass = await bcrypt.hash(
        request.body.newPassword,
        await bcrypt.genSalt(10)
      );
      console.log({ message: "Encrypting New Password." });
      let update = {
        password: secPass,
      };
      await AuthUserModel.findByIdAndUpdate(id, update);
      return {
        error: false,
        message: "Password Changed Successfully.",
        result: null,
      };
    }
  }

  public async updateAuthUser(id: string, request) {
    request.body.modifiedOn = new Date().getTime();
    let update = {
      ...request.body,
    };
    await AuthUserModel.findByIdAndUpdate(id, update);
    let UpdatedAuthUser = await AuthUserModel.findById(id);
    console.log({ message: "Signing JWT Token" });
    var token = jwt.sign(
      { data: UpdatedAuthUser },
      Configuration.get("SERVER_TOKEN_SECRET")
    );
    return { error: false, message: "User Updated", result: token };
  }

  public async deleteAuthUser(id: string) {
    let AuthUser = await AuthUserModel.findByIdAndDelete(id);
    return AuthUser;
  }
}
