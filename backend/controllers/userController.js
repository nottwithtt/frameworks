const user = require("../models/User");
const contact = require("../models/contactModel");

const getContactsByUser = async (req, res) => {
  try {
    const contacts = await contact.find({userId: req.userId})
    return contacts.map((contacto) => {
      contact.findById(contacto.user_contact_Id)
    })
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
}

// Controlador para obtener todos los usuarios
const getAllUsers = async (req, res) => {
  try {
    // Obtén todos los usuarios de la base de datos
    const users = await user.find();
    
    // Envía la respuesta con los usuarios encontrados
    res.status(200).json({
      success: true,
      data: users
    });
  } catch (error) {
    //errores
    res.status(500).json({ error: "Internal server error" });
  }
};
  
module.exports = { getAllUsers, getContactsByUser };