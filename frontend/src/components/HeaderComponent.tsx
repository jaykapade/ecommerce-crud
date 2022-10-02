import { useState } from "react";
import { AppBar, Button, Toolbar, Modal, Box } from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { selectedUser } from "../redux/slices/auth/authSlice";
import { logout } from "../redux/slices/auth/authAction";
import AddProduct from "./AddProduct";

const HeaderComponent = () => {
  const { isAuthenticated, user } = useAppSelector(selectedUser);
  const [open, setOpen] = useState(false);

  const dispatch = useAppDispatch();

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const logoutHandler = () => {
    dispatch(logout());
  };

  const style = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3,
  };

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar
          position="static"
          sx={{ backgroundColor: "#131921", color: "white", padding: "4px" }}
        >
          <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
            <div>
              <h3>Inventory</h3>
            </div>
            {isAuthenticated && (
              <div
                style={{ display: "flex", gap: "1rem", alignItems: "center" }}
              >
                <Button
                  onClick={handleOpen}
                  sx={{ marginRight: "16px" }}
                  variant="outlined"
                >
                  Add Product
                </Button>
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
            )}
          </Toolbar>
        </AppBar>
      </Box>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box sx={{ ...style, width: 400 }}>
          <AddProduct />
        </Box>
      </Modal>
    </>
  );
};

export default HeaderComponent;
