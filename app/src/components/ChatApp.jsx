import { useState } from "react";
import ConversationsSidebar from "./ConversationsSidebar";
import ChatArea from "./ChatArea";
import AuthModal from "./AuthProtect";
import { useAuth } from "../context/AuthContext";
import { useUserContext } from "../context/UserContext";
import PersonAvatar from "./PersonAvatar";

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
              <div className="py-4 flex-2 flex flex-row-reverse">
                <div className="flex-2 flex"></div>
                <div className="flex">
                  {user && <PersonAvatar user={user} />}
                  <div className="align-middle justify-center">
                    <button
                      type="button"
                      className="text-red-700 mx-4 my-1 hover:text-white border duration-300 border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900"
                      onClick={signOut}
                    >
                      Sign Out
                    </button>
                  </div>
                </div>
              </div>
              <div className="main flex-1 flex flex-col">
                <div className="hidden lg:block heading flex-2">
                  <h1 className="text-3xl text-gray-700 mb-4">
                    <b>Chat Application</b> (Mercor.io assignment)
                  </h1>
                </div>

                <div className="flex-1 flex h-full max-h-[86vh]">
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
