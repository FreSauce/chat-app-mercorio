import { createContext, useContext, useEffect, useState } from "react";
import { useSocketContext } from "./SocketContext";

const UserContext = createContext();

export const useUserContext = () => {
  return useContext(UserContext);
};


export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [conversations, setConversations] = useState([]);
  const socket= useSocketContext();

  useEffect(() => {
    if (socket) {
      socket.on("user", (user) => {
        console.log(user);
        setUser(user);
      });
      socket.on("conversation", (conversations) => {
        console.log(conversations);
        setConversations(conversations);
      })
      socket.on("refetch", () => {
        socket.emit("conversation:get");
        socket.emit("user:get");
      })

    }
  }, [socket]);

  return (
    <UserContext.Provider value={{ user, conversations }}>
      {children}
    </UserContext.Provider>
  );
};
