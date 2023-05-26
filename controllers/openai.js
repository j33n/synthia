require("dotenv").config({ path: "../config.env" });

const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

// summarize text
exports.summarize = async (req, res) => {
  const { text } = req.body;
  try {
    const response = await openai.createCompletion({
      model: "text-davinci-003",

      prompt: `Summarize this: \n${text}`,
      temperature: 0,
      max_tokens: 7,
    });

    if (response.data) {
      if (response.data.choices[0].text) {
        return res.status(200).json(response.data.choices[0].text);
      }
    }
  } catch (err) {
    return res.status(404).json({ message: err.message });
  }
};

// Generate a paraghraph based on text
exports.paragraph = async (req, res) => {
  const { text } = req.body;
  try {
    const response = await openai.createCompletion({
      model: "text-davinci-003",

      prompt: `Write a detailed pargraph about: \n${text}`,
      temperature: 0,
      max_tokens: 7,
    });

    if (response.data) {
      if (response.data.choices[0].text) {
        return res.status(200).json(response.data.choices[0].text);
      }
    }
  } catch (err) {
    return res.status(404).json({ message: err.message });
  }
};
