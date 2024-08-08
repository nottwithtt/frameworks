const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema(
  {
    members: {
      type: [String], // Array de IDs de los usuarios que forman parte del contacto
      required: true,
    }
  },
  { timestamps: true } // Añade `createdAt` y `updatedAt` automáticamente
);

const contactModel = mongoose.model('Contact', contactSchema);
module.exports = contactModel;
