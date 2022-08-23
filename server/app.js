const express = require("express");
const bodyParser = require("body-parser");
// const cors = require("cors");
const session = require("express-session");
const cookieParser = require("cookie-parser");
const dbConnect = require("./db/dbConnect");
const User = require("./models/user");
const Resume = require("./models/resume");

const app = express();
// app.use(
//   cors({
//     credentials: true,
//     origin: '',
//     methods: ["GET", "POST", "PUT", "DELETE"],
//     allowedHeaders: ["Content-Type", "Authorization"],
//   })
// );

// body parser configuration
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

dbConnect();

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );
  next();
});

app.get("/", (request, response, next) => {
  response.json({ message: "Hey! This is your server response!" });
  next();
});

const rootRouter = require("./routes");

app.use("/", rootRouter);

module.exports = app;
