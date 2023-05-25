import { Box, Typography } from "@mui/material";
import { useTheme } from "@emotion/react";
import { Link } from "react-router-dom";

import Logo from "../assets/logo.svg";

const Navbar = () => {
  const theme = useTheme();

  return (
    <Box
      width="100%"
      p="0.5rem 6%"
      backgroundColor={theme.palette.background.alt}
      textAlign="center"
      sx={{ boxShadow: 3, mb: 2, display: "flex", alignItems: "center" }}
    >
      <Link to="/">
        <Box sx={{ display: "flex", alignItems: "center", gap: "1rem" }}>
          <img src={Logo} width="60" />
          <Typography variant="h4" fontWeight="600" color="#000000" >
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
        <Box>
          <Link to="/register">Register</Link>
        </Box>
        <Box>
          <Link to="/login">Login</Link>
        </Box>
      </Box>
    </Box>
  );
};

export default Navbar;
