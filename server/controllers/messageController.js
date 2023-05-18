const { Message } = require("../models");
const { fetchConversation } = require("./conversationController");

const createMesage = async (senderId, receiverId, text) => {
  if (
    message.text === "" ||
    message.text.replace(/(\r\n|\n|\r)/gm, "") == "" ||
    message.text === null
  )
    return;
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
