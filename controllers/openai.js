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
      // model: "text-davinci-003"
      model: "gpt-3.5-turbo",
      prompt: `Summarize the following text: \n${text}`,
      temperature: 0.5,
      max_tokens: 500,
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
      // model: "text-davinci-003"
      model: "gpt-3.5-turbo",
      prompt: `Write a detailed paragraph about: \n${text}`,
      temperature: 0.5,
      max_tokens: 500,
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

// chatbot
exports.chatbot = async (req, res) => {
  const { text } = req.body;
  try {
    const response = await openai.createCompletion({
      // model: "text-davinci-003"
      model: "gpt-3.5-turbo",
      // train the ai on answering as a virtual assistant
      prompt: `Answer questions like a virtual assistant would.
      User: Hello there!
      Assistant: Greetings! How may I assist you today?
      User: I need help with my computer. It keeps crashing.
      Assistant: Mmm, troubled, your computer seems. Fear not, I'm here to help. First, have you tried turning it off and on again?
      User: Yes, I have. It still crashes randomly.
      Assistant: Hmmm, a more serious issue, this might be. To delve deeper, I require more information. What operating system are you using?
      User: I'm using Windows 10.
      Assistant: Ah, Windows 10, a powerful system it is. Fear not, troubleshooting we shall. Have you installed any new software or made any recent updates?
      User: Yes, I recently installed a new antivirus program.
      Assistant: Mmm, conflicting software can lead to disturbances. Uninstall the new antivirus program you must, and observe if the crashes persist.
      User: Alright, I'll give it a try. Anything else I should do?
      : \n${text}`,
      temperature: 0.7,
      max_tokens: 300,
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

exports.code = async (req, res) => {
  const { text } = req.body;
  try {
    const response = await openai.createCompletion({
      // // model: "code-davinci-002"
      model: "gpt-3.5-turbo",
      prompt: `Generate code from the following instructions: \n${text}`,
      temperature: 0.25,
      max_tokens: 400,
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
