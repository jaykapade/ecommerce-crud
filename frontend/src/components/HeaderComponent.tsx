import { AppBar, Box, Button, Toolbar } from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { selectedUser } from "../redux/slices/auth/authSlice";
import { logout } from "../redux/slices/auth/authAction";

const HeaderComponent = () => {
  const { user } = useAppSelector(selectedUser);

  const dispatch = useAppDispatch();

  const logoutHandler = () => {
    dispatch(logout());
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        sx={{ backgroundColor: "#131921", color: "white", padding: "4px" }}
      >
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <div>
            <h3>Inventory</h3>
          </div>
          <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
            <div>
              <div>Hello, {user?.name}</div>
            </div>
            <Button
              onClick={logoutHandler}
              sx={{ marginRight: "16px" }}
              color="error"
            >
              <LogoutIcon />
            </Button>
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default HeaderComponent;
