import "./App.css";
import AuthProtect from "./components/AuthProtect";
import ChatApp from "./components/ChatApp";
import { AuthProvider } from "./context/AuthContext";
import { SocketProvider } from "./context/SocketContext";
import { UserProvider } from "./context/UserContext";

function App() {
  return (
    <AuthProvider>
      <SocketProvider>
        <UserProvider>
          <AuthProtect>
            <ChatApp />
          </AuthProtect>
        </UserProvider>
      </SocketProvider>
    </AuthProvider>
  );
}

export default App;
