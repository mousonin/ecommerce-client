import { FaFacebookF } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import {
  GoogleAuthProvider,
  signInWithPopup,
  FacebookAuthProvider,
} from "firebase/auth";
import { auth } from "../../../utils/firebase";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { BaseButton } from "../../Base/Button";

const SocialLog = () => {
  async function socialLogin(by: any) {
    try {
      const result = await signInWithPopup(auth, by);
      console.log(result);
    } catch (err) {
      console.log(err);
    }
  }
  const [user, loading] = useAuthState(auth);
  const navigate = useNavigate();
  useEffect(() => {
    if (user) navigate("/");
  });
  const characters = [
    {
      id: 1,
      onClick: () => socialLogin(new GoogleAuthProvider()),
      text: "Continue with Google",
      icon: <FcGoogle className="translate-y-3 duration-1000 opacity-0" />,
    },
    {
      id: 2,
      onClick: () => socialLogin(new FacebookAuthProvider()),
      text: "Continue with Facebook",
      icon: (
        <FaFacebookF className="translate-y-3 duration-1000 opacity-0 text-azure-500" />
      ),
    },
  ];
  return (
    <div>
      {characters.map((character) => (
        <BaseButton {...character} key={character.id} />
      ))}
    </div>
  );
};

export default SocialLog;
