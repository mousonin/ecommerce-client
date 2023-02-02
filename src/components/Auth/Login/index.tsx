import SocialLog from "../Social-log";
import LoginAcc from "../Account-auth/Login";
const Login = () => {
  return (
    <div className="max-w-xl m-auto border rounded-xl">
      <div className="max-w-md m-auto">
        <p className="my-5">Sign up</p>
        <SocialLog />
        <span className="text-center block my-5">OR</span>
        <LoginAcc />
      </div>
    </div>
  );
};
export default Login;
