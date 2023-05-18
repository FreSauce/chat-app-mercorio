import PersonAvatar from "./PersonAvatar";
import moment from "moment";

const ConversationCard = ({ otherUser, messages, handleSelect }) => {
  let lastMessage = messages[messages.length - 1];
  let readableDate = moment
    .duration(moment(new Date(lastMessage.createdAt)).diff(moment()))
    .humanize(true);
  return (
    <div
      className="entry cursor-pointer transform hover:scale-105 duration-300 transition-transform bg-white mb-4 rounded p-4 flex shadow-md"
      onClick={handleSelect}
    >
      <div className="flex-2">
        <PersonAvatar user={otherUser} />
      </div>
      <div className="flex-1 px-2">
        <div className="truncate w-32">
          <span className="text-gray-800">{otherUser.name}</span>
        </div>
        <div>
          <small className="text-gray-600">
            <b>{lastMessage.senderId !== otherUser.id ? "You: " : ""}</b>
            {lastMessage.text}
          </small>
        </div>
      </div>
      <div className="flex-2 text-right">
        <div>
          <small className="text-gray-500">{readableDate}</small>
        </div>
      </div>
    </div>
  );
};

export default ConversationCard;
