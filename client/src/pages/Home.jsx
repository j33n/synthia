import { DescriptionRounded } from "@mui/icons-material";
import ViewHeadlineRoundedIcon from "@mui/icons-material/ViewHeadlineRounded";
import ChatRoundedIcon from "@mui/icons-material/ChatRounded";
import CodeRoundedIcon from "@mui/icons-material/CodeRounded";
import ImageSearchRoundedIcon from "@mui/icons-material/ImageRounded";
import { Box, Card, Stack, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <Stack p={2} width="95%" marginLeft="auto">
      <Box>
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
          <Card
            onClick={() => navigate("/chatbot")}
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
            <ChatRoundedIcon
              sx={{ fontSize: 80, color: "primary.main", mt: 2, ml: 2 }}
            />
            <Stack p={3} pt={0}>
              <Typography fontWeight="bold" variant="h5">
                Chatbot
              </Typography>
              <Typography variant="h6">
                Gain insights from our virtual assistant!
              </Typography>
            </Stack>
          </Card>
        </Stack>
      </Box>
      <Box>
        <Typography fontWeight="bold" variant="h4" mb={2} mt={4}>
          Code Generation
        </Typography>
        <Card
          onClick={() => navigate("/code")}
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
          <CodeRoundedIcon
            sx={{ fontSize: 80, color: "primary.main", mt: 2, ml: 2 }}
          />
          <Stack p={3} pt={0}>
            <Typography fontWeight="bold" variant="h5">
              Translate natural language to code
            </Typography>
          </Stack>
        </Card>
      </Box>
      <Box>
        <Typography fontWeight="bold" variant="h4" mb={2} mt={4}>
          Image Generation
        </Typography>
        <Card
          onClick={() => navigate("/image")}
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
          <ImageSearchRoundedIcon
            sx={{ fontSize: 80, color: "primary.main", mt: 2, ml: 2 }}
          />
          <Stack p={3} pt={0}>
            <Typography fontWeight="bold" variant="h5">
              Image Generator
            </Typography>
            <Typography variant="h6">
              Generate image from instructions, try to be specific!
            </Typography>
          </Stack>
        </Card>
      </Box>
    </Stack>
  );
};

export default Home;
