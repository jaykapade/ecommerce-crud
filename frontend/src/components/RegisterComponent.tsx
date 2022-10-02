import { FC, useEffect } from "react";
import {
  Box,
  Grid,
  TextField,
  InputLabel,
  Typography,
  Button,
  Divider,
  CircularProgress,
} from "@mui/material";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";

import { RegisterUser } from "../models/user.type";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { register as registerAction } from "../redux/slices/auth/authAction";
import { reset } from "../redux/slices/auth/authSlice";

const RegisterComponent: FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterUser>();

  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const { isLoading, isSuccess } = useAppSelector((state) => state.auth);

  useEffect(() => {
    if (isSuccess) {
      dispatch(reset());
      navigate("/login");
    }
  }, [isSuccess, dispatch]);

  const onSubmitHandler = (userInfo: RegisterUser) => {
    console.log(userInfo);
    dispatch(registerAction(userInfo));
  };

  if (isLoading)
    return <CircularProgress sx={{ marginTop: "64px" }} color="primary" />;

  return (
    <Box
      sx={{
        border: 1,
        padding: 2,
        borderColor: "#cccccc",
        width: "350px",
        marginTop: 2,
      }}
    >
      <form onSubmit={handleSubmit(onSubmitHandler)}>
        <Grid container direction="column" justifyContent="flex-start">
          <Typography variant="h4" component="h1">
            Create account
          </Typography>

          <InputLabel
            sx={{ fontWeight: 500, marginTop: 1, color: "#000000" }}
            htmlFor="name"
          >
            Your name
          </InputLabel>
          <TextField
            {...register("name", { required: true })}
            type="text"
            variant="outlined"
            size="small"
            placeholder="Your Name"
            error={!!errors.name}
            helperText={!!errors.name ? "Required" : null}
          />

          <InputLabel
            sx={{ fontWeight: 500, marginTop: 1, color: "#000000" }}
            htmlFor="email"
          >
            Email
          </InputLabel>
          <TextField
            {...register("email", { required: true })}
            type="email"
            variant="outlined"
            size="small"
            placeholder="Your Email"
            error={!!errors.email}
            helperText={!!errors.email ? "Required" : null}
          />
          <InputLabel
            sx={{ fontWeight: 500, marginTop: 1, color: "#000000" }}
            htmlFor="password"
          >
            Password
          </InputLabel>
          <TextField
            {...register("password", { required: true })}
            type="password"
            variant="outlined"
            size="small"
            placeholder="Your Password"
            error={!!errors.password}
            helperText={!!errors.password ? "Required" : null}
          />

          <InputLabel
            sx={{ fontWeight: 500, marginTop: 1, color: "#000000" }}
            htmlFor="confirmPassword"
          >
            Re-enter password
          </InputLabel>
          <TextField
            {...register("confirmPassword", { required: true })}
            type="password"
            variant="outlined"
            size="small"
            placeholder="Confirm Password"
            error={!!errors.confirmPassword}
            helperText={!!errors.confirmPassword ? "Required" : null}
          />
          <Button
            id="register-btn"
            variant="contained"
            style={{
              marginTop: "16px",
              height: "31px",
              backgroundColor: "#4b7af0",
              color: "white",
              textTransform: "none",
            }}
            type="submit"
          >
            Register
          </Button>
        </Grid>
      </form>

      <Divider sx={{ marginTop: "16px", marginBottom: "16px" }} />

      <div>
        <small>
          Already have an account?{" "}
          <Link
            to="/login"
            style={{ textDecoration: "none", color: "#0000ee" }}
          >
            Login Now
          </Link>
        </small>
      </div>
    </Box>
  );
};

export default RegisterComponent;
