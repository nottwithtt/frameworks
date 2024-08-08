const contactModel = requiere("../models/contactModel");


//Se encarga de add contactos
const addContact = async (req, res) => {
  const { userId, user_contact_Id } = req.body;
  try {
    const contact = await contactModel.findOne({
      members: { $all: [userId, user_contact_Id] },
    });
    if (contact) return res.status(200).json(contact);
    const newContact = new contactModel({
      members: [userId, user_contact_Id],
    });

    const response = await newContact.save();
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};