const express = require("express");
const router = express.Router();

const {
  summarize,
  paragraph,
  chatbot,
  code,
  image,
} = require("../controllers/openai");

router.post("/summary", summarize);
router.post("/paragraph", paragraph);
router.post("/chatbot", chatbot);
router.post("/code", code);
router.post("/image", image);

module.exports = router;
