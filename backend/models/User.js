const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  username: {
    type: String,
    required: [true, "Porfavor indicar un nombre de usuario"],
    maxlength: [60, "El nombre de usuario debe tener 60 caracteres o menos"],
  },
  name: {
    type: String,
    required: [true, "Porfavor indique un nombre"],
  },
  surname: {
    type: String,
    required: [true, "Porfavor indicar el apellido"],
  },
  password: {
    type: String,
    required: [true, "Porfavor indicar la contraseña"],
  },
  contacts: {
    type: [String],
  },
});

const User = mongoose.model("User", UserSchema);
module.exports = User;
