import { FcGoogle } from "react-icons/fc";
import { FaFacebookF } from "react-icons/fa";
import SocialLog from "../Social-log";
const Login = () => {
  return (
    <div className="max-w-xl m-auto border rounded-sl">
      <div>
        <p>Sign up</p>
        <SocialLog />
        {/* <div>
          <p>OR</p>
        </div>
        <form action="">
          <label htmlFor="email">Email</label>
          <input type="text" name="email" id="email" />
          <label htmlFor="password">Password</label>
          <input type="text" name="password" id="password" />
          <button type="submit">
            <p>Log in</p>
          </button>
          <p>
            Don't have an account?
            <span>Sign up</span>
          </p>
        </form> */}
      </div>
    </div>
  );
};
export default Login;
