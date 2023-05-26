const express = require("express");
const router = express.Router();

const { summarize, paragraph, chatbot } = require("../controllers/openai");

router.post("/summary", summarize);
router.post("/paragraph", paragraph);
router.post("/chatbot", chatbot);

module.exports = router;
