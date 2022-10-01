import axios from "axios";
import jwt_decode from "jwt-decode";

import { DecodedJwt, Jwt } from "../../../models/jwt.type";
import { DisplayUser, LoginUser, NewUser } from "../../../models/user.type";
import { api } from "../../../utils/helper";

const register = async (newUser: NewUser): Promise<DisplayUser | null> => {
  const response = await api.post("/auth/register", newUser);

  return response.data;
};

const login = async (
  user: LoginUser
): Promise<{ jwt: Jwt; user: DisplayUser | null }> => {
  const response = await api.post("/auth/login", user);
  if (response?.data) {
    localStorage.setItem("jwt", JSON.stringify(response.data));

    const decodedJwt: DecodedJwt = jwt_decode(response.data.token);
    localStorage.setItem("user", JSON.stringify(decodedJwt.user));
    return { jwt: response.data, user: decodedJwt.user };
  }
  return { jwt: response.data, user: null };
};

const logout = (): void => {
  localStorage.removeItem("user");
  localStorage.removeItem("jwt");
};

const authService = {
  register,
  login,
  logout,
};

export default authService;
