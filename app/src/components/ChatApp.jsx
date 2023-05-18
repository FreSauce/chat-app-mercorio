import { useState } from "react";
import ConversationsSidebar from "./ConversationsSidebar";
import ChatArea from "./ChatArea";
import AuthModal from "./AuthProtect";
import { useAuth } from "../context/AuthContext";
import { useUserContext } from "../context/UserContext";

const ChatApp = () => {
  const { signOut } = useAuth();
  const { user } = useUserContext();
  const { conversations } = useUserContext();
  const [selectedConversation, setSelectedConversation] = useState(null);

  return (
    <>
      <div className="w-full h-screen">
        <div className="flex h-full">
          <div className="flex-1 bg-gray-100 w-full h-full">
            <div className="main-body container m-auto w-11/12 h-full flex flex-col">
              <div className="py-4 flex-2 flex flex-row">
                <div className="flex-1 text-right">
                  <span className="inline-block text-gray-700">
                    Status:{" "}
                    {user?.isOnline ? (
                      <>
                        <span className="inline-block align-text-bottom w-4 h-4 bg-green-400 rounded-full border-2 border-white"></span>{" "}
                        <b>Online </b>
                      </>
                    ) : (
                      <>
                        <span className="inline-block align-text-bottom w-4 h-4 bg-gray-400  rounded-full border-2 border-white"></span>{" "}
                        <b>Offline </b>
                      </>
                    )}
                  </span>
                  <button
                    type="button"
                    className="text-red-700 mx-2 ml-4 hover:text-white border duration-300 border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900"
                    onClick={signOut}
                  >
                    Sign Out
                  </button>
                </div>
              </div>

              <div className="main flex-1 flex flex-col">
                <div className="hidden lg:block heading flex-2">
                  <h1 className="text-3xl text-gray-700 mb-4">
                    <b>Chat Application</b> (Mercor.io assignment)
                  </h1>
                </div>

                <div className="flex-1 flex h-full">
                  <ConversationsSidebar
                    conversations={conversations}
                    setSelectedConversation={setSelectedConversation}
                  />
                  <ChatArea
                    conversation={conversations.find(
                      ({ id }) => id == selectedConversation
                    )}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChatApp;
