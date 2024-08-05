const express = require("express");
const authRoutes = require("./routes/authenticationRouter");
const cookieParser = require("cookie-parser");
const cors = require("cors");

const app = express();
app.disable("x-powered-by");
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:3000",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true,
  })
);

app.use("/", authRoutes);
module.exports = app;
