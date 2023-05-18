const { Op } = require("sequelize");
const { Conversation, Message, User } = require("../models");

const fetchConversation = async (user1Id, user2Id) => {
  let conv;
  conv = await Conversation.findConversation(user1Id, user2Id);
  console.log(conv?.messages);
  if (!conv) {
    conv = await Conversation.create({
      user1Id: user1Id,
      user2Id: user2Id,
    });
  }
  return conv;
};

const fetchAllConversations = async (userId) => {
  // return [];
  allConv = await Conversation.findAll({
    where: {
      [Op.or]: [{ user1Id: userId }, { user2Id: userId }],
    },
    include: [
      {
        model: Message,
        as: "messages",
        where: {
          "$messages.conversationId$": { [Op.col]: "conversation.id" },
        },
        order: [["createdAt", "ASC"]],
      },
      {
        model: User,
        as: "user1",
        where: {
          "$user1.id$": { [Op.col]: "conversation.user1Id" },
        },
      },
      {
        model: User,
        as: "user2",
        where: {
          "$user2.id$": { [Op.col]: "conversation.user2Id" },
        },
      },
    ],
  });
  return allConv.map((conv) => {
    return {
      id: conv.id,
      messages: conv.messages.filter(
        (msg) => msg.text !== "" && msg.text !== null
      ),
      otherUser: userId !== conv?.user1?.id ? conv?.user1 : conv?.user2,
    };
  });
};

module.exports = { fetchConversation, fetchAllConversations };
