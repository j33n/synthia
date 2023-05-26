import { DescriptionRounded } from "@mui/icons-material";
import ViewHeadlineRoundedIcon from "@mui/icons-material/ViewHeadlineRounded";
import { Box, Card, Stack, Typography } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <Box p={2}>
      <Typography fontWeight="bold" variant="h4" mb={2}>
        Text Generation
      </Typography>
      <Stack direction="row" spacing="6" gap={2}>
        <Card
          onClick={() => navigate("/summary")}
          sx={{
            boxShadow: 2,
            borderRadius: 5,
            height: 190,
            width: 280,
            cursor: "pointer",
            "&:hover": {
              border: 2,
              boxShadow: 0,
              borderColor: "primary.dark",
            },
          }}
        >
          <DescriptionRounded
            sx={{ fontSize: 80, color: "primary.main", mt: 2, ml: 2 }}
          />
          <Stack p={3} pt={0}>
            <Typography fontWeight="bold" variant="h5">
              Text Summarizer
            </Typography>
            <Typography variant="h6">
              Summarize your long text into just a few sentences
            </Typography>
          </Stack>
        </Card>
        <Card
          onClick={() => navigate("/paragraph")}
          sx={{
            boxShadow: 2,
            borderRadius: 5,
            height: 190,
            width: 280,
            cursor: "pointer",
            "&:hover": {
              border: 2,
              boxShadow: 0,
              borderColor: "primary.dark",
            },
          }}
        >
          <ViewHeadlineRoundedIcon
            sx={{ fontSize: 80, color: "primary.main", mt: 2, ml: 2 }}
          />
          <Stack p={3} pt={0}>
            <Typography fontWeight="bold" variant="h5">
              Paragraph Generator
            </Typography>
            <Typography variant="h6">
              Generate a paragraph about any topic
            </Typography>
          </Stack>
        </Card>
      </Stack>
    </Box>
  );
};

export default Home;
