import { useEffect, useState } from "react";
import ConversationCard from "./ConversationCard";
import { useUserContext } from "../context/UserContext";
import InvitePerson from "./InvitePerson";

const ConversationsSidebar = ({ conversations, setSelectedConversation }) => {
  const [filteredConversations, setFilteredConversations] =
    useState(conversations);
  const [search, setSearch] = useState("");

  useEffect(() => {
    setFilteredConversations(
      conversations.filter((conv) =>
        conv.otherUser.name.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search, conversations]);

  return (
    <div className="sidebar hidden lg:flex w-1/3 flex-2 flex-col pr-6">
      <div className="search flex-2 pb-6 px-2">
        <input
          type="text"
          className="outline-none py-2 block w-full bg-transparent border-b-2 border-gray-200"
          placeholder="Search"
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <InvitePerson />
      <div className="flex-1 h-full overflow-auto px-3">
        {filteredConversations.map((conv) => {
          return (
            <ConversationCard
              key={conv.id}
              otherUser={conv.otherUser}
              messages={conv.messages}
              handleSelect={() => setSelectedConversation(conv.id)}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ConversationsSidebar;
