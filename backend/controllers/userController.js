const User = require("../models/User");
const Contact = require("../models/contactModel");

const getContactsByUser = async (req, res) => {
  try {
    console.log("Obteniendo contactos por usuario");
    const userId = req.body.userId; // Se asume que `req.userId` contiene el ID del usuario autenticado

    // Obtener los contactos asociados al usuario
    const contacts = await Contact.find({ members: userId });
    // Obtener los detalles de los usuarios relacionados
    const contactDetails = await Promise.all(
      contacts.map(async (contacto) => {
        // Filtrar para obtener el ID del contacto que no sea el del usuario actual
        const contactUserId = contacto.members.find(id => id !== userId);
        return await User.findById(contactUserId);
      })
    );
    res.status(200).json(contactDetails); // Devolver la lista de detalles de contactos al cliente
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

// Controlador para obtener todos los usuarios
const getAllUsers = async (req, res) => {
  try {
    // Obtén todos los usuarios de la base de datos
    const users = await User.find();
    
    console.log(users);
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