import { Schema, model } from "mongoose";

// 1. Create multiple interfaces representing a document in MongoDB.

// For User
export interface IAuthUser {
  roleId: string;
  fName: string;
  lName: string;
  gender: string;
  email: string;
  mobile: number;
  currAddress?: string;
  currAddress2?: string;
  zip?: number;
  city?: string;
  state?: string;
  country?: string;

  sFirstName: string;
  sLastName: string;
  sAddress1?: string;
  sAddress2?: string;
  sPhoneNo: number;
  sPostalCode?: string;
  sCountry?: string;
  shipState?: string;
  sCity?: string;

  password?: string;
  isActive?: boolean;
  createdOn: string;
  modifiedOn: string;
}

// For Signup
export interface SignupRequestBody {
  roleId: string;
  fName: string;
  lName: string;
  gender: string;
  email: string;
  mobile: number;
  currAddress?: string;
  zip?: number;
  city?: string;
  state?: string;
  country?: string;

  sFirstName: string;
  sLastName: string;
  sAddress1?: string;
  sAddress2?: string;
  sPhoneNo: number;
  sPostalCode?: string;
  sCountry?: string;
  shipState?: string;
  sCity?: string;

  password: string;
}

// For Login
export interface LoginRequestBody {
  email: string;
  password: string;
}

// For Changing Password
export interface ChangePasswordBody {
  oldPassword: string;
  newPassword: string;
}

// 2. Create a Schema corresponding to the document interface.
const schema = new Schema<IAuthUser>({
  roleId: { type: String, required: true },
  fName: { type: String, required: true },
  lName: { type: String, required: true },
  gender: { type: String, required: false },
  email: { type: String, required: true },
  mobile: { type: Number, required: false },
  currAddress: { type: String, required: false },
  currAddress2: { type:String, required:false },
  zip: { type: Number, required: false },
  city: { type: String, required: false },
  state: { type: String, required: false },
  country: { type: String, required: false },
  sFirstName: { type: String, required: false },
  sLastName: { type: String, required: false},
  sAddress1: { type: String, required: false },
  sAddress2: { type: String, required: false},
  sPhoneNo: { type: Number, required: false},
  sPostalCode: { type: String, required: false },
  sCountry: { type: String, required: false},
  shipState: { type: String, required: false},
  sCity: { type: String, required: false },
  password: { type: String, required: false },
  isActive: { type: Boolean, required: true, default: true },
  createdOn: { type: String, required: true },
  modifiedOn: { type: String, required: true },
});

// 3. Create a Model.
let AuthUserModel = model<IAuthUser>("Auth.User", schema);
export default AuthUserModel;
