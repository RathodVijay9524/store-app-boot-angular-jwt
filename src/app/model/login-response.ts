import { User } from "../admin/component/user/model/user";

export interface LoginResponse {
    jwtToken: string;
    user: User | null;
    login: boolean;
  }
  