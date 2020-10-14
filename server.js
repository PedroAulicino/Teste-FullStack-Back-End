const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const path = require("path");
const mongoose = require("mongoose");
const route = require("./src/routes");
const app = express();

mongoose.connect(
  "mongodb://localhost:27017/nodenode",
  {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useFindAndModify: false,
  },
  function (err) {
    if (err) {
      console.log(err);
    } else {
      console.log("MongoDb Connectado");
    }
  }
);

app.use(cors());
app.use(cookieParser());
app.use(express.json());

app.use(route);

app.listen(3333, function () {
  console.log(`Server running on port ${3333}`);
});
