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
  Stack,
} from "@mui/material";
import { Link } from "react-router-dom";
import { API_BASE_URL } from "../utils";

const Paragraph = () => {
  const theme = useTheme();
  const isNotMobile = useMediaQuery("(min-width: 1000px)");
  const [text, setText] = useState("");
  const [paragraph, setParagraph] = useState("");
  const [error, setError] = useState("");

  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const handleParagraph = async (e) => {
    e.preventDefault();

    try {
      const { data } = await axios.post(
        `${API_BASE_URL}/api/openai/paragraph`,
        { text },
        config
      );
      setParagraph(data);
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
        onSubmit={handleParagraph}
      >
        <Typography fontWeight="500" variant="h5" mb="1rem">
          Paragraph Generator
        </Typography>

        <Stack direction="row" spacing={1}>
          <Box width="87%">
            <TextField
              required
              fullWidth
              multiline={true}
              placeholder="Enter any topic you want to know more about!!"
              type="text"
              onChange={(e) => setText(e.target.value)}
              value={text}
            ></TextField>
          </Box>
          <Button
            disableElevation
            variant="contained"
            type="submit"
            sx={{ color: "white" }}
          >
            Generate
          </Button>
        </Stack>
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
        {paragraph ? (
          <Typography>{paragraph}</Typography>
        ) : (
          <Typography
            variant="h3"
            color="neutral.main"
            sx={{
              textAlign: "center",
              verticalAlign: "middle",
              lineHeight: "450px",
            }}
          >
            Your paragraph should appear here!
          </Typography>
        )}
      </Card>
      <Typography mt="1rem">
        Not the tool you&apos;re looking for <Link to="/">Go Back</Link>
      </Typography>
    </Box>
  );
};

export default Paragraph;
