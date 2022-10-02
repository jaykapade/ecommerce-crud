import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { ThemeProvider } from "@emotion/react";
import { theme } from "./utils/theme";
import Register from "./pages/Register";
import Home from "./pages/Home";
import Login from "./pages/Login";
import ProtectedRoute from "./features/auth/ProtectedRoute";
import ProductDetails from "./pages/ProductDetails";
import HeaderComponent from "./components/HeaderComponent";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <HeaderComponent />
      <Router>
        <Routes>
          <Route path="/" element={<ProtectedRoute page={<Home />} />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/product/:id"
            element={<ProtectedRoute page={<ProductDetails />} />}
          />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
