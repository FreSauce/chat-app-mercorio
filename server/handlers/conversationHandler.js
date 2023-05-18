const {
  fetchAllConversations,
} = require("../controllers/conversationController");

module.exports = (io, socket) => {
  const fetchConversations = async () => {
    let allConv = await fetchAllConversations(socket.user.id);
    socket.emit("conversation", allConv);
  };

  socket.on("conversation:get", fetchConversations);
};
