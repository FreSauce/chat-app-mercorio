const { fetchUserByEmail } = require("../controllers/userController");

module.exports = (io, socket) => {
  const fetchUser = async () => {
    const user = await fetchUserByEmail(socket.user.email);
    console.log(user);
    socket.emit("user", user);
  };

  socket.on("user:get", fetchUser);
};
