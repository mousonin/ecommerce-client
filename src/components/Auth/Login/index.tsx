import SocialLog from "../Social-log";
import LoginAcc from "../Account-auth/Login";
import { TfiClose } from "react-icons/tfi";
import { Link } from "react-router-dom";
const Login = () => {
  return (
    <div className="max-w-xl m-auto border rounded-xl mt-2/4 -translate-y-2/4">
      <div className="max-w-md m-auto relative">
        <Link to="/">
          <TfiClose className="absolute right-0 border-solid border border-mateColors-0 rounded-xl p-1" />
        </Link>
        <p className="my-5">Sign up</p>
        <SocialLog />
        <span className="text-center block my-5">OR</span>
        <LoginAcc />
        <div className="flex justify-center mb-5">
          <p>Don't have an account ?</p>
          <Link to="/user/register">
            <span className="underline mx-1">Register</span>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Login;
