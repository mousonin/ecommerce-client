import { FaFacebookF } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import styles from "./style.module.scss";
import {
  GoogleAuthProvider,
  signInWithPopup,
  FacebookAuthProvider,
  updateProfile,
} from "firebase/auth";
import { auth } from "../../../utils/firebase";
import { error } from "console";

const SocialLog = () => {
  const googleProvider = new GoogleAuthProvider();
  const GoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      console.log(result);
    } catch (err) {
      console.error(err);
    }
  };
  const facebookProvider = new FacebookAuthProvider();
  const facebookLogin = async () => {
    try {
      const result = await signInWithPopup(auth, facebookProvider);
      console.log(result);
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <div className="max-w-md m-auto">
      <button
        className={`flex items-center border rounded-xl w-full justify-center p-1 m-1 bg-mateColors-0 ${styles["social-log"]}`}
        onClick={GoogleLogin}
      >
        <p className="m-1 text-white">Continue with Google</p>
        <FcGoogle className="translate-y-3 duration-1000 opacity-0" />
      </button>
      <button
        className={`flex items-center border rounded-xl w-full justify-center p-1 m-1 bg-mateColors-0 ${styles["social-log"]}`}
        onClick={facebookLogin}
      >
        <p className="m-1 text-white">Continue with Facebook</p>
        <FaFacebookF className="translate-y-3 duration-1000 opacity-0 text-azure-500" />
      </button>
    </div>
  );
};

export default SocialLog;
