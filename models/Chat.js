const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ChatSchema = new Schema({
  id_usuario_emisor: {
    type: String,
    required: [true, ""],
  },
});

const User = mongoose.model("User", UserSchema);
module.exports = User;
