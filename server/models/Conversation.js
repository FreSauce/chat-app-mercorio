const { Op } = require("sequelize");
const db = require("./db");
const Message = require("./Message");

const Conversation = db.define("conversation", {});

// find conversation given two user Ids

Conversation.findConversation = async function (user1Id, user2Id) {
  const conversation = await Conversation.findOne({
    where: {
      user1Id: {
        [Op.or]: [user1Id, user2Id],
      },
      user2Id: {
        [Op.or]: [user1Id, user2Id],
      },
    },
    include: {
      model: Message,
      as: "messages",
      where: {
        conversationId: { [Op.col]: "Conversation.id" },
      },
      required: true,
      duplicating: false,
    },
  });

  // return conversation or null if it doesn't exist
  return conversation;
};

module.exports = Conversation;
