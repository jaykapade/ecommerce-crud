import { DisplayUser } from "./user.type";

export type Jwt = { token: string } | null;

export interface DecodedJwt {
  user: DisplayUser;
  exp: number;
  iat: number;
}
