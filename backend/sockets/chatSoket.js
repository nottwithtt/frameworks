const { Server } = require("socket.io");

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
    console.log("a user connected");
    
    socket.on("message", (data) => {
      console.log(data);
      io.emit("message", data);
    });

    socket.on("disconnect", () => {
      console.log("user disconnected");
    });
  });
};