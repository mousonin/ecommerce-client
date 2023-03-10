import SocialLog from "../Social-log";
import RegisterAcc from "../Account-auth/Register";
import { TfiClose } from "react-icons/tfi";
import { Link } from "react-router-dom";
const Register = () => {
  return (
    <div className="max-w-xl m-auto border rounded-xl">
      <div className="max-w-md m-auto relative">
        <Link to="/">
          <TfiClose className="absolute right-0 border-solid border border-mateColors-0 rounded-xl p-1" />
        </Link>
        <p className="my-5">Sign up</p>
        <SocialLog />
        <span className="text-center block my-5">OR</span>
        <RegisterAcc />
        <div className="flex justify-center mb-5">
          <p>Have an account ?</p>
          <Link to="/user/login">
            <span className="underline mx-1">Log in</span>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Register;
