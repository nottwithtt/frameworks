const contactModel = require("../models/contactModel");


//Se encarga de add contactos
const addContact = async (req, res) => {

  const { userId, user_contact_Id } = req.body;
  try {
    // Verificar si ya existe un contacto entre los dos usuarios
    const existingContact = await contactModel.findOne({
      members: { $all: [userId, user_contact_Id] },
    });

    if (existingContact) {
      return res.status(200).json(existingContact);
    }

    // Si no existe, crear un nuevo contacto
    const newContact = new contactModel({
      members: [userId, user_contact_Id],
    });

    const response = await newContact.save();
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = { addContact };