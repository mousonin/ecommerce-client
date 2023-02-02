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
  // const sociaList = [
  //   {
  //     funcName: () => GoogleLogin(),
  //     method: () => new GoogleAuthProvider(),
  //   },
  //   {
  //     funcName: () => FacebookLogin(),
  //     method: () => new FacebookAuthProvider(),
  //   },
  // ];

  // sociaList.map((social) => {
  //   const {social.funcName} = async () => {
  //     try {
  //       const result = await signInWithPopup(auth, social.method());
  //       console.log(result);
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   };
  // });

  const GoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, new GoogleAuthProvider());
      console.log(result);
    } catch (err) {
      console.log(err);
    }
  };
  const FacebookLogin = async () => {
    try {
      const result = await signInWithPopup(auth, new FacebookAuthProvider());
      console.log(result);
    } catch (err) {
      console.error(err);
    }
  };
  const characters = [
    {
      onClick: () => GoogleLogin,
      pText: "Google",
      icon: <FcGoogle className="translate-y-3 duration-1000 opacity-0" />,
    },
    {
      onClick: () => FacebookLogin,
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
          onClick={character.onClick()}
        >
          <p className="m-1 text-white">Continue with {character.pText}</p>
          {character.icon}
        </button>
      ))}
    </div>
  );
};

export default SocialLog;
