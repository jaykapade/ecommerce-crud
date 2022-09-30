import { FC } from "react";
import RegisterComponent from "../components/RegisterComponent";
import AuthLayout from "../features/auth/Auth.layout";

const Register: FC = () => {
  return (
    <AuthLayout>
      <RegisterComponent />
    </AuthLayout>
  );
};

export default Register;
