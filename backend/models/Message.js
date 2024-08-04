const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ChatSchema = new Schema({
  id_usuario_emisor: {
    type: String,
    required: [true, "Porfavor ingresar un usuario emisor"],
  },
  id_usuario_receptor: {
    type: String,
    required: [true, "Porfavor ingresar un usuario receptor"],
  },
});

const Chat = mongoose.model("Char", ChatSchema);
module.exports = Chat;
