const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema(
  {
    contactId: String,
    user_contact_Id: String,
    userId: String,
  }
);

const Contact = mongoose.model("Contact", contactSchema);

module.exports = Contact;
