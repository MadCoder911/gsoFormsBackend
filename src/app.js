const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const authRouter = require("./routes/auth/auth.router");
const formsRouter = require("./routes/forms/forms.router");

const app = express();
app.use(
  cors({
    origin: ["https://gsu-trip.vercel.app", "http://localhost:5173"],

    methods: ["POST", "PUT", "GET", "OPTIONS", "HEAD"],
    origin: true,
    credentials: true, //i
  })
);
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Credentials", "true");
  next();
});
app.use(cookieParser());
app.use(express.json());
app.use(authRouter);
app.use(formsRouter);
app.use((err, req, res, next) => {
  const errorStatus = err.status || 500;
  const errorMessage = err.message || "Something went wrong !";
  return res.status(errorStatus).json({
    success: false,
    status: errorStatus,
    message: errorMessage,
    stack: err.stack,
  });
});
module.exports = app;
