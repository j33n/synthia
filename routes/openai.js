const express = require("express");
const router = express.Router();

const { summarize, paragraph, chatbot, code } = require("../controllers/openai");

router.post("/summary", summarize);
router.post("/paragraph", paragraph);
router.post("/chatbot", chatbot);
router.post("/code", code);

module.exports = router;
