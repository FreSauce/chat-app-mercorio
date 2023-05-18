import { createContext, useContext, useState, useEffect } from "react";
import io from "socket.io-client";
import { useAuth } from "./AuthContext";

const SocketContext = createContext();

export function useSocketContext() {
  return useContext(SocketContext);
}

export const SocketProvider = ({ children }) => {
  const { user } = useAuth();
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    if (user) {
      async function setNewSocket() {
        const newSocket = io(import.meta.env.VITE_APP_SOCKET_URL, {
          query: { token: await user.getIdToken() },
          transports: ["websocket"],
        });
        setSocket(newSocket);
      }
      setNewSocket();
    }
  }, [user]);

  return (
    <SocketContext.Provider value={socket}>{children}</SocketContext.Provider>
  );
};
