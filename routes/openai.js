const express = require("express");
const router = express.Router();

const { summarize, paragraph } = require("../controllers/openai");

router.post("/summary", summarize);
router.post("/paragraph", paragraph);

module.exports = router;
