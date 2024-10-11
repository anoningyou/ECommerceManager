import { Roles } from "src/app/enums/roles";

export interface UserDto {
  id: string;
  userName: string;
  token: string;
  roles: Roles[];
}
