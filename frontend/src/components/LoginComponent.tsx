import { FC, FormEvent, useEffect } from "react";
import {
  Box,
  Grid,
  TextField,
  InputLabel,
  Typography,
  Button,
  Divider,
} from "@mui/material";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { LoginUser } from "../models/user.interface";

const LoginComponent: FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginUser>();

  const onSubmitHandler = (userInfo: LoginUser) => {
    console.log(userInfo);
  };

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
            Login
          </Button>
        </Grid>
      </form>

      <Divider sx={{ marginTop: "16px", marginBottom: "16px" }} />

      <div>
        <small>
          Don't have an account?{" "}
          <Link
            to="/register"
            style={{ textDecoration: "none", color: "#0000ee" }}
          >
            SignUp Now
          </Link>
        </small>
      </div>
    </Box>
  );
};

export default LoginComponent;
