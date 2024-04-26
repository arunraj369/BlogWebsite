require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const app = express();
const cors = require("cors");
const PORT = process.env.PORT || 3001;
const data = require("./Routes/RoutesPage");

mongoose
  .connect("mongodb://localhost:27017/Blog")
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.json({ extended: false }));
app.use("/api/data", data);

// app.get("/", (req, res) => {
//   res.send("hello world");
// });

app.listen(PORT, () =>
  console.log(`server is running on http://localhost:${PORT}`)
);
