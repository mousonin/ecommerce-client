import { FaFacebookF } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import styles from "./style.module.scss";
import {
  GoogleAuthProvider,
  signInWithPopup,
  FacebookAuthProvider,
} from "firebase/auth";
import { auth } from "../../../utils/firebase";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";

const SocialLog = () => {
  async function socialLogin(by: any) {
    try {
      const result = await signInWithPopup(auth, by);
      console.log(result);
    } catch (err) {
      console.log(err);
    }
  }

  const characters = [
    {
      onClick: () => socialLogin(new GoogleAuthProvider()),
      pText: "Google",
      icon: <FcGoogle className="translate-y-3 duration-1000 opacity-0" />,
    },
    {
      onClick: () => socialLogin(new FacebookAuthProvider()),
      pText: "Facebook",
      icon: (
        <FaFacebookF className="translate-y-3 duration-1000 opacity-0 text-azure-500" />
      ),
    },
  ];
  const [user, loading] = useAuthState(auth);
  const navigate = useNavigate();
  useEffect(() => {
    if (user) navigate("/");
  });
  return (
    <div>
      {characters.map((character) => (
        <button
          className={`flex items-center border rounded-xl w-full justify-center p-1 m-1 bg-mateColors-0 ${styles["social-log"]}`}
          onClick={character.onClick}
        >
          <p className="m-1 text-white">Continue with {character.pText}</p>
          {character.icon}
        </button>
      ))}
    </div>
  );
};

export default SocialLog;
