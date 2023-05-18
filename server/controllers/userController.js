const { User } = require("../models");
const onlineUsers = require("../onlineUsers");
const { fetchAllConversations } = require("./conversationController");

const fetchUser = async (userId, name, email, picture) => {
  const user = await User.findOne({
    where: {
      id: userId,
    },
  });
  if (user) {
    return user;
  } else {
    const user = await User.create({
      id: userId,
      name,
      email,
      photoUrl: picture,
    });
    return user;
  }
};

const fetchUserByEmail = async (email) => {
  const user = await User.findOne({
    where: {
      email: email,
    },
  });
  return user;
};

const updateUserStatus = async (userId, isOnline) => {
  User.update(
    { isOnline: isOnline },
    {
      where: {
        id: userId,
      },
    }
  ).then(() => {
    fetchAllConversations(userId).then((allConv) => {
      allConv.forEach((conv) => {
        onlineUsers[conv.otherUser.id]?.emit("refetch");
      });
    });
  });
};

module.exports = { fetchUser, fetchUserByEmail, updateUserStatus };
