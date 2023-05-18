require("dotenv").config();
const express = require("express");
const http = require("http");
const socketio = require("socket.io");
const cors = require("cors");
const { auth } = require("./config/firebase");
const { fetchUser, updateUserStatus } = require("./controllers/userController");

const app = express();
const server = http.createServer(app);
const io = socketio(server, {
  cors: {
    origin: "https://chat-app-225c7.web.app",
  },
});

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.send("working fine");
});

const PORT = process.env.PORT;

server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

io.use(async (socket, next) => {
  const token = socket.handshake.query.token;
  try {
    const res = await auth.verifyIdToken(token);
    if (res) {
      socket.user = await fetchUser(
        res.user_id,
        res.name,
        res.email,
        res.picture
      );
      // console.log(socket.user);
      return next();
    }
  } catch (error) {
    console.log(error);
    return next(new Error("Authentication error"));
  }
});

const registerMessageHandlers = require("./handlers/messageHandler");
const registerConversationHandlers = require("./handlers/conversationHandler");
const registerUserHandlers = require("./handlers/userHandler");
const onlineUsers = require("./onlineUsers");
const {
  fetchAllConversations,
} = require("./controllers/conversationController");

const onConnection = (socket) => {
  console.log("New client connected");
  onlineUsers[socket.user.id] = socket;
  updateUserStatus(socket.user.id, true);
  socket.emit("refetch");
  socket.on("disconnect", () => {
    console.log("Client disconnected");
    updateUserStatus(socket.user.id, false);
  });
  registerMessageHandlers(io, socket);
  registerConversationHandlers(io, socket);
  registerUserHandlers(io, socket);
};

io.on("connection", onConnection);
