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
  Card,
} from "@mui/material";
import { Link } from "react-router-dom";
import { API_BASE_URL } from "../utils";

const Summary = () => {
  const theme = useTheme();
  const isNotMobile = useMediaQuery("min-width: 1000px");
  const [text, setText] = useState("");
  const [summary, setSummary] = useState("");
  const [error, setError] = useState("");

  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const handleSummary = async (e) => {
    e.preventDefault();

    try {
      const { data } = await axios.post(
        `${API_BASE_URL}/api/openai/summary`,
        { text },
        config
      );
      setSummary(data);
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
        onSubmit={handleSummary}
      >
        <Typography fontWeight="500" variant="h5" mb="0.5rem">
          Text Summarizer
        </Typography>
        <TextField
          required
          placeholder="Enter the text to summarize here"
          type="text"
          onChange={(e) => setText(e.target.value)}
          value={text}
        ></TextField>
        <Button type="submit" variant="contained" sx={{ color: "white" }}>
          Summarize
        </Button>
      </form>
      <Card
        sx={{
          mt: 4,
          p: 2,
          border: 1,
          boxShadow: 0,
          borderColor: "neutral.medium",
          borderRadius: 2,
          height: "500px",
          bgcolor: "background.default",
        }}
      >
        <Typography>
          {summary ? summary : "Summary will appear here!"}
        </Typography>
      </Card>
      <Typography mt="1rem">
        Not the tool you&apos;re looking for <Link to="/">Go Back</Link>
      </Typography>
    </Box>
  );
};

export default Summary;
