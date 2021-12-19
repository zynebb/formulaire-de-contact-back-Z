require("dotenv").config();
const express = require("express");
const formidable = require("express-formidable");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(formidable());

app.post("/form", (req, res) => {
  try {
    console.log(req.fields);
    res.status(200).json({ message: "Server is up!" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

app.listen(3000, () => {
  console.log("server started");
});
