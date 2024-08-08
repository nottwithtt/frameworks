const { Server } = require("socket.io");

module.exports = function (serverPort) {
  let onlineUsers = [];

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
      if (!onlineUsers.some((user) => user.userId === userId)) {
        onlineUsers.push({
          userId,
          socketId: socket.id,
        });
      }
      console.log("Connected Users:", onlineUsers);
    });

    socket.on("sendMessage", (message) => {
      console.log("Lista de usuarios: ", onlineUsers);
      
      const user = onlineUsers.find((user) => {
        console.log("Comparando:", user.userId.trim(), "con", message.contactId.trim());
        return user.userId.trim() === message.contactId.trim();
      });
    
      console.log("Enviando a: ", user);
    
      if (user) {
        console.log("Entro a enviar mensaje", user.socketId);
        socket.to(user.socketId).emit("getMessage", message);
        // io.emit("getMessage", message);
      } else {
        console.log("Usuario no encontrado para el ID:", message.contactId);
      }
    });

    socket.on("disconnect", () => {
      onlineUsers = onlineUsers.filter((user) => user.socketId !== socket.id);
      console.log("Usuario desconectado, lista actualizada:", onlineUsers);
    });
  });
};
