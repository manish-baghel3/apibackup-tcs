import {
  Get,
  Post,
  Put,
  Delete,
  Route,
  Tags,
  Body,
  Security,
  Query,
} from "tsoa";
import {
  IAuthUser,
  SignupRequestBody,
  ChangePasswordBody,
  LoginRequestBody,
} from "../entity/authUser.model";
import { AuthUserService } from "../services/authUser.service";

interface Response {
  error: boolean;
  message: string;
  result: string;
}

@Route("auth")
@Tags("User Authentication")
export default class AuthUserSwagger {
  @Post("/loginUser")
  public async loginAuthUser(
    @Body() request: LoginRequestBody
  ): Promise<Response> {
    const service = new AuthUserService();
    const res = await service.loginAuthUser(request);
    return res;
  }

  // @Security("jwt")
  @Post("/createUser")
  public async createAuthUser(
    @Body() request: SignupRequestBody
  ): Promise<Response> {
    const service = new AuthUserService();
    const res = await service.createAuthUser(request);
    return res;
  }

  // @Security("jwt")
  @Get("/user")
  public async getAllAuthUser(): Promise<IAuthUser[]> {
    const service = new AuthUserService();
    const res = await service.getAllAuthUser();
    return res;
  }

  // @Security("jwt")
  @Get("/user/:id")
  public async getAuthUserById(id: string): Promise<IAuthUser> {
    const service = new AuthUserService();
    const res = await service.getAuthUserById(id);
    return res;
  }

  // @Security("jwt")
  @Put("/user/:id")
  public async updateAuthUser(
    id: string,
    @Body() request: SignupRequestBody
  ): Promise<Response> {
    const service = new AuthUserService();
    const res = await service.updateAuthUser(id, request);
    return res;
  }

  // @Security("jwt")
  @Put("/changePassword/:id")
  public async changePassword(
    id: string,
    @Body() request: ChangePasswordBody
  ): Promise<Response> {
    const service = new AuthUserService();
    const res = await service.changePassword(id, request);
    return res;
  }

  // @Security("jwt")
  @Delete("/user/:id")
  public async deleteAuthUser(id: string): Promise<IAuthUser> {
    const service = new AuthUserService();
    const res = await service.deleteAuthUser(id);
    return res;
  }
}
