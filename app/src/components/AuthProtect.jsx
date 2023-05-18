import { useAuth } from "../context/AuthContext";
import GoogleIcon from "../assets/google.svg";
const AuthProtect = ({ children }) => {
  const { signInWithGoogle, user } = useAuth();

  const handleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        console.log("logged in");
      })
      .catch((error) => {
        console.log(error, "error logging in");
      });
  };

  if (!user) {
    return (
      <div
        id="auth-modal"
        tabIndex="-1"
        className="fixed top-0 left-0 right-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto h-full"
      >
        <div className="absolute top-0 left-0 z-0 w-full h-full bg-white-500 backdrop-blur-xl">
          <div className="absolute top-0 left-0 z-0 w-full h-full bg-gradient-to-r opacity-30 from-blue-500 to-purple-500"></div>
        </div>
        <div className="relative w-full max-w-md max-h-full m-auto">
          <div className="relative bg-white rounded-lg shadow mt-[50%]">
            <div className="px-6 py-4 border-b rounded-t ">
              <h3 className="text-base text-center font-semibold text-gray-900 lg:text-xl ">
                Login in to Continue (Chat App)
              </h3>
            </div>
            <div className="p-6">
              <p className="text-m font-normal text-gray-500 ">
                Login with Google to access this chat application <br />{" "}
                (Mercor.io Assignment).
              </p>
              <ul className="my-4 space-y-3">
                <li className="flex align-center justify-center">
                  <button
                    type="button"
                    className={"login-with-google-btn flex"}
                    onClick={handleSignIn}
                  >
                    <div className="flex-1">
                      <img
                        width={24}
                        className="mx-2"
                        src={GoogleIcon}
                        alt="Google Icon"
                      />
                    </div>
                    <div className="text-gray-500 text-m text font-medium">Sign in with Google</div>
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
  return children;
};

export default AuthProtect;
