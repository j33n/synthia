// connect environment variables
require("dotenv").config({ path: "./config.env" });

const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const errorHandler = require("./middleware/error");

const port = process.env.PORT || 4000;

// initialize app
const app = express();

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ extended: true }));

// connect to our database
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to our Mongo Database!!");
  })
  .catch((err) => {
    console.log("Error while connect to DB:", err);
  });

mongoose.set("strictQuery", false);

// ROUTES
app.use("/api/auth", require("./routes/auth"));
app.use("/api/openai", require("./routes/openai"));
app.get("/api", (req, res) => {
  res.send("Welcome, to Synthia API");
});
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
