const { createMesage } = require("../controllers/messageController");
const { fetchUserByEmail } = require("../controllers/userController");
const onlineUsers = require("../onlineUsers");

module.exports = (io, socket) => {
  const sendMessage = async (payload) => {
    const receiver = await fetchUserByEmail(payload.receiverEmail);
    if (!receiver) return;
    const message = await createMesage(
      socket.user.id,
      receiver.id,
      payload.text
    );
    onlineUsers[receiver.id].emit("refetch");
    socket.emit("refetch");
  };

  socket.on("message:send", sendMessage);
};
