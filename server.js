// connect environment variables
require("dotenv").config({ path: "./config.env" });

const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

// initialize app
const app = express();

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

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

const port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
