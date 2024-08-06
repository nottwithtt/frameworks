const messageModel = require("../models/messageModel");

const createMessage = async (req, res) => {
  const { chatId, text } = req.body;
  const message = new messageModel({
    chatId,
    text,
  });

  try {
    const response = await message.save();
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

const getMessages = async (req, res) => {
  const { chatId } = req.params;
  try {
    const messages = await messageModel.find({ chatId });
    res.status(200).json(messages);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = { createMessage, getMessages };
