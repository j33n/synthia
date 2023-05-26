import { Box, Typography } from "@mui/material";
import { useTheme } from "@emotion/react";
import { Link } from "react-router-dom";

import Logo from "../assets/logo.svg";
import axios from "axios";
import { API_BASE_URL } from "../utils";

const Navbar = () => {
  const theme = useTheme();
  const loggedIn = JSON.parse(localStorage.getItem("authToken"));

  const logoutCompletely = (data) => {
    if (data.success) {
      localStorage.removeItem("authToken");
      window.location.reload();
    }
  };

  const handleLogout = async () => {
    try {
      await axios
        .post(`${API_BASE_URL}/api/auth/logout`)
        .then((res) => logoutCompletely(res.data));
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Box
      width="100%"
      p="0.5rem 6%"
      backgroundColor={theme.palette.background.alt}
      textAlign="center"
      sx={{ boxShadow: 3, mb: 2, display: "flex", alignItems: "center", position: "absolute", top: "0" }}
    >
      <Link to="/">
        <Box sx={{ display: "flex", alignItems: "center", gap: "1rem" }}>
          <img src={Logo} width="60" />
          <Typography variant="h4" fontWeight="600" color="#000000">
            Synthia
          </Typography>
        </Box>
      </Link>
      <Box
        sx={{
          display: "flex",
          marginLeft: "auto",
          gap: "1rem",
          flexDirection: "row",
        }}
      >
        {loggedIn ? (
          <Box>
            <Link to="/" onClick={handleLogout}>
              Logout
            </Link>
          </Box>
        ) : (
          <>
            <Box>
              <Link to="/register">Register</Link>
            </Box>
            <Box>
              <Link to="/login">Login</Link>
            </Box>
          </>
        )}
      </Box>
    </Box>
  );
};

export default Navbar;
