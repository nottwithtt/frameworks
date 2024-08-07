const { Server } = require("socket.io");
const JWT = require("jsonwebtoken");
const User = require("../models/User");
const {
  hashPassword,
  comparePassword,
} = require("../utils/authenticationUtils");

module.exports = function (serverPort) {
  const io = new Server(serverPort, {
    cors: {
      origin: "*",
      methods: ["GET", "POST"],
      allowedHeaders: ['Content-Type'],
      credentials: true
    }
  });

  io.on("connection", (socket) => {
    socket.on("addNewUser", (userId) => {
      // const decoded = JWT.verify(token, process.env.ACCESS_TOKEN_SEQUENCE);
      // const user = await User.findById(decoded.id);
      !onlineUsers.some((user) => user.userId === userId) &&
        onlineUsers.push({
          userId,
          socketId: socket.id,
        });
      
    socket.on("sendMessage", (message) => {
      const user = onlineUsers.find(
        (user) => user.userId === message.recipientId
      );
      
      if (user) {
        console.log("sending message");
        io.to(user.socketId).emit("getMessage", message);
      }
    });
  
    console.log("Connected Users:", onlineUsers);
    });
  });

//  io.on("connection", (socket) => {
    // console.log("a user connected");
    
  //   socket.on("message", (data) => {
  //     console.log(data);
  //     io.emit("message", data);
  //   });

  //   socket.on("disconnect", () => {
  //     console.log("user disconnected");
  //   });
  // });

};