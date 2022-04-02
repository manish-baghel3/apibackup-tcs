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
import { IUserRole } from "../entity/userRole.model";
import { UserRoleService } from "../services/userRole.service";

interface Response {
  error: boolean;
  message: string;
}

@Route("role")
@Tags("User Roles")
export default class UserRoleSwagger {

  // @Security("jwt")
  @Post("/createRole")
  public async createUserRole(
    @Body() request: IUserRole
  ): Promise<Response> {
    const service = new UserRoleService();
    const res = await service.createUserRole(request);
    return res;
  }

  // @Security("jwt")
  @Get("/")
  public async getAllUserRole(): Promise<IUserRole[]> {
    const service = new UserRoleService();
    const res = await service.getAllUserRole();
    return res;
  }

  // @Security("jwt")
  @Put("/:id")
  public async updateUserRole(
    id: string,
    @Body() request: IUserRole
  ): Promise<Response> {
    const service = new UserRoleService();
    const res = await service.updateUserRole(id, request);
    return res;
  }

  // @Security("jwt")
  @Delete("/:id")
  public async deleteUserRole(id: string): Promise<IUserRole> {
    const service = new UserRoleService();
    const res = await service.deleteUserRole(id);
    return res;
  }
}
