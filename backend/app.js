const express = require("express");
const authRoutes = require("./routes/authenticationRouter");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const chatSocket = require("./sockets/chatSoket");

corsapp = cors({
  origin: "http://localhost:3000",
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials: true,
});


const app = express();
app.disable("x-powered-by");
app.use(express.json());
app.use(cookieParser());
app.use(corsapp);

chatSocket(4001);

app.use("/", authRoutes);
module.exports = app;
