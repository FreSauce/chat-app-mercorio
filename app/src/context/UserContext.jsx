import { createContext, useContext, useEffect, useState } from "react";
import { useSocketContext } from "./SocketContext";

const UserContext = createContext();

export const useUserContext = () => {
  return useContext(UserContext);
};

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [conversations, setConversations] = useState([]);
  const socket = useSocketContext();

  useEffect(() => {
    if (socket) {
      socket.on("user", (user) => {
        console.log(user);
        setUser(user);
      });
      socket.on("conversation", (conversations) => {
        console.log(conversations);
        let sortedMessages = conversations.map((conversation) => {
          let sortedMessages = conversation.messages.sort((a, b) => {
            return new Date(a.createdAt) - new Date(b.createdAt);
          });
          return { ...conversation, messages: sortedMessages };
        });
        let sortedConversations = sortedMessages.sort((a, b) => {
          return (
            new Date(b.messages[b.messages.length - 1].createdAt) -
            new Date(a.messages[a.messages.length - 1].createdAt)
          );
        });
        setConversations(sortedConversations);
      });
      socket.on("refetch", () => {
        socket.emit("conversation:get");
        socket.emit("user:get");
      });
    }
  }, [socket]);

  return (
    <UserContext.Provider value={{ user, conversations }}>
      {children}
    </UserContext.Provider>
  );
};
