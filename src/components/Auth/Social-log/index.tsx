import { FaFacebookF } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import styles from "./style.module.scss";
import {
  GoogleAuthProvider,
  signInWithPopup,
  FacebookAuthProvider,
} from "firebase/auth";
import { auth } from "../../../utils/firebase";
import { Component, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";

type TProps = {
  onClick?: () => void;
  text: string;
  icon?: JSX.Element;
};

export const BaseButton = ({ onClick, text, icon }: TProps) => {
  return (
    <button
      className={`flex items-center border rounded-xl w-full justify-center p-1 my-1 bg-mateColors-0 ${styles["social-log"]}`}
      onClick={onClick}
    >
      <p className="m-1 text-white">{text}</p>
      {icon}
    </button>
  );
};

export const BaseFormElement = (props: any) => {
  return (
    <>
      <label htmlFor="" className="m-1">
        {props.character.name}
      </label>
      <input
        type={props.character.type}
        placeholder={`Please input a valid ${props.character.name}`}
        className="outline-none m-1 px-1 rounded-md border-mateColors-0 border-solid border"
      />
    </>
  );
};

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
