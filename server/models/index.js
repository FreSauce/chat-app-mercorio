const Conversation = require("./Conversation");
const User = require("./User");
const Message = require("./Message");

User.hasMany(Conversation);
Conversation.belongsTo(User, { as: "user1" });
Conversation.belongsTo(User, { as: "user2" });
Message.belongsTo(Conversation);
Conversation.hasMany(Message);



module.exports = {
  User,
  Conversation,
  Message,
};
