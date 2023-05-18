import { useUserContext } from "../context/UserContext";
import PersonAvatar from "./PersonAvatar";
import moment from "moment";

const Message = ({ otherUser, message }) => {
  const { user } = useUserContext();

  return message.senderId == user.id ? (
    <div className="message me mb-4 flex text-right">
      <div className="flex-1 px-2">
        <div className="inline-block bg-blue-600 rounded-full p-2 px-6 text-white">
          <span>{message.text}</span>
        </div>
        <div className="pr-4">
          <small className="text-gray-500">{message.date}</small>
        </div>
      </div>
    </div>
  ) : (
    <div className={`message mb-4 flex`}>
      <div className="flex-2">
        <PersonAvatar user={otherUser} />
      </div>
      <div className="flex-1 px-2">
        <div className="inline-block bg-gray-300 rounded-full p-2 px-6 text-gray-700">
          <span>{message.text}</span>
        </div>
        <div className="pl-4">
          <small className="text-gray-500">
            {moment
              .duration(moment(new Date(message.createdAt)).diff(moment()))
              .humanize(true)}
          </small>
        </div>
      </div>
    </div>
  );
};

export default Message;
