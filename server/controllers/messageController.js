const { Message } = require("../models");
const { fetchConversation } = require("./conversationController");

const createMesage = async (senderId, receiverId, text) => {
  let conv = await fetchConversation(senderId, receiverId);
  if (conv) {
    const message = await Message.create({
      senderId,
      text,
      conversationId: conv.id,
    });
    return message;
  }
};

module.exports = { createMesage };
