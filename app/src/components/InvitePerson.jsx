import { useSocketContext } from "../context/SocketContext";

const InvitePerson = () => {
  const socket = useSocketContext();
  const submitHandler = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    e.target.reset();
    console.log(email);
    socket.emit("message:send", {
      receiverEmail: email,
      text: "Hey! I would like to chat with you.",
    });
    socket.emit("conversation:get");
  };

  return (
    <div className="entry cursor-pointer transform hover:scale-[1.01] duration-500 transition-transform bg-white mb-4 rounded shadow-md ">
      <div className="px-6 py-6 lg:px-8">
        <h3 className="mb-4 text-xl font-medium text-gray-900 ">
          Chat with a new Person
        </h3>
        <form className="space-y-6" onSubmit={submitHandler}>
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 "
            >
              Enter the receiver's email address
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="john@doe.com"
              required
            />
            <p className="mt-2 text-sm text-gray-500">
              *The receiver must be a registered user of this application.
            </p>
          </div>
          <button
            type="submit"
            className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Invite
          </button>
        </form>
      </div>
    </div>
  );
};

export default InvitePerson;
