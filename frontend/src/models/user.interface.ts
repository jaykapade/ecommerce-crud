export interface LoginUser {
  email: string;
  password: string;
}

export interface RegisterUser {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export interface DisplayUser {
  id: string;
  name: string;
  email: string;
}
