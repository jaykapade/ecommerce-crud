export type LoginUser = {
  email: string;
  password: string;
};

export type RegisterUser = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
};

export type NewUser = Omit<RegisterUser, "confirmPassword">;

export type DisplayUser = {
  id: string;
  name: string;
  email: string;
};
