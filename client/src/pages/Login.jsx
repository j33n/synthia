import { useState } from "react";
import axios from "axios";
import {
  Box,
  Typography,
  useTheme,
  useMediaQuery,
  Button,
  TextField,
  Collapse,
  Alert,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { API_BASE_URL } from "../utils";

const Login = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const isNotMobile = useMediaQuery("(min-width: 1000px)");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const { data } = await axios.post(
        `${API_BASE_URL}/api/auth/login`,
        { email, password },
        config
      );
      if (data.token.accessToken) {
        localStorage.setItem("authToken", true);
        navigate("/");
        window.location.reload();
      }
    } catch (err) {
      console.log(err);
      if (err.response.data.error) {
        setError(err.response.data.error);
      } else if (err.message) {
        setError(err.message);
      }

      setTimeout(() => {
        setError("");
      }, 5000);
    }
  };

  return (
    <Box
      width={isNotMobile ? "40%" : "90%"}
      p="2rem"
      m="2rem auto"
      borderRadius={5}
      backgroundColor={theme.palette.background.alt}
      sx={{ boxShadow: 5 }}
    >
      <Collapse in={error}>
        <Alert severity="error" sx={{ mb: 2 }}>
          {error}
        </Alert>
      </Collapse>
      <form
        style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
        onSubmit={handleLogin}
      >
        <Typography fontWeight="500" variant="h5" mb="0.5rem">
          Log In
        </Typography>
        <TextField
          required
          label="Email"
          type="text"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        ></TextField>
        <TextField
          required
          label="Password"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        ></TextField>
        <Button type="submit" variant="contained" sx={{ color: "white" }}>
          Log In
        </Button>
      </form>
      <Typography mt="1rem">
        Don&apos;t have an account? <Link to="/register">Sign Up</Link>
      </Typography>
    </Box>
  );
};

export default Login;
